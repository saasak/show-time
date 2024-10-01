import { config } from 'dotenv'

import type { Handle, HandleServerError } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { type SupabaseClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr'

import { formatEnv, type DotEnv } from '@saasak/utils-env'
import { serializeMiddleware } from '@saasak/kit-req'

import { building } from '$app/environment'

const raw = (config().parsed) as DotEnv
const env = formatEnv<Record<string, any>>(raw, {
	'db.user': 'DATABASE_USER',
	'db.db': 'DATABASE_NAME',
	'db.password': 'DATABASE_PASSWORD',
	'db.port': { key: 'DATABASE_PORT', cast: 'number' },
	'redis.host': 'REDIS_HOST',
	'redis.port': 'REDIS_PORT',
	'logger.logLevel': { key: '__DUMMY_LOG_LEVEL__', cast: 'number', default: 6 },
	'supabase.url': 'SUPABASE_URL',
	'supabase.jwtSecret': 'SUPABASE_JWT_SECRET',
	'supabase.apiKey': 'SUPABASE_API_KEY',
	'supabase.serviceRole': 'SUPABASE_SERVICE_ROLE',
	'storage.url': 'SUPABASE_STORAGE_URL',
	'storage.serviceRole': 'SUPABASE_SERVICE_ROLE',
	'transcode.authKey': '',
})

async function init() {
	return {
		services: ({} as {
			supabase: SupabaseClient,
		}),
		env,
		raw
	}
}

const appInit = !building
	? await init().catch(err => {
		console.error('Failed to initialize the app', err)
		process.exit(1)
	})
	: {
		services: ({} as {
			supabase: SupabaseClient,
		}),
		env: {},
		raw: {}
	}


/************************************************
 *  Svelte Handle Hook
 * 		- Runs for every request
 ************************************************/
const poormanCorsHandler: Handle = async ({ event, resolve }) => {
	if (event.request.method.toLowerCase() === 'options') {
		return new Response(null, { status: 200 })
	}

	return resolve(event)
}

const serializeHandler = serializeMiddleware({ prop: 'serialized' })

const servicesHandler: Handle = async ({ event, resolve }) => {
	const { services, env, raw } = appInit

	event.locals.services = services
	// Initialize Supabase client
	event.locals.services.supabase = createServerClient(
		// @ts-ignore
		env.supabase.url,
		// @ts-ignore
		env.supabase.serviceRole,
		{
			cookies: {
				getAll: () => event.cookies.getAll(),
				setAll: (cookies) => cookies.forEach(
					(cookie) => event.cookies.set(
						cookie.name,
						cookie.value, 
						{ ...cookie.options, path: cookie.options.path ?? '/' }
					)
				),
			},
		}
	)

	event.locals.rawEnv = raw
	event.locals.env = env

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range' || name === 'x-supabase-api-version'
		},
	})
}

export const handle: Handle = sequence(
	poormanCorsHandler,
	servicesHandler,
	serializeHandler
)

/************************************************
 *  Svelte HandleError Hook
 * 		- Runs for every uncaught error in
 * 			the rendering process
 ************************************************/
export const handleError: HandleServerError = ({ error, event }) => {
	const err = error as App.Error
	const message = [
		['______ UNCAUGHT ERROR ______'],
		['- => It happened for:', event.request.method.toUpperCase(), event.url.pathname],
		['- => Error message is:', err.message],
		err?.code ? ['- => Error has code:', err.code] : null,
		err?.stack ? [err.stack] : null,
		['---------------------------']
	]
		.filter(Boolean)
		.map((msg) => (msg ?? []).join(' '))
		.join('\n')

	console.error(message)

	if (err?.code === 'XX000') {
		process.exit(1)
	}

	return {
		message: err?.message ?? 'Oops',
		code: err?.code ?? 'no-error-code'
	}
}
