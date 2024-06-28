/// <reference types="@sveltejs/kit" />

declare namespace App {
	type Env = Record<string, any>
	type SupabaseClient = import('@supabase/supabase-js').SupabaseClient
	type AwilixContainer = import('awilix').AwilixContainer
	type AuthSession = import('@saasak/kit-sessions').AuthSession

	type Profile = import('@saasak/kit-sessions').Profile

  type AppServicesContainer = {
    supabase: SupabaseClient
    checkFeatureFlag?: (ff: string) => boolean
    env?: Env
  }

  export type AppServices = AppServicesContainer
  export type AppSession = AuthSession
  export type AppEnv = Env

  export interface Locals {
    env: Record<string, any>;
		rawEnv: Record<string, string>;
    session: AuthSession;
    services: AppServices;
		container: AwilixContainer;
		serialized: any;
  }

  export interface Session {
		provider: {
			access_token: string
			refresh_token?: string
			[other: string]: any
		};
    acceptedLanguage: string;
    isLoggedIn: boolean;
    config: Record<string, any>;
    user: Profile;
    orgParams: any;
    permissions: Record<string, boolean>;
    workspaces: Array<{ id: string; name: string }>;
    workspace_id: string;
    org_id: string;
    DOMAIN: string;
    SUPABASE_URL: string;
    SUPABASE_API_KEY: string;
  }

  export interface Error {
    prop?: string
    message: string
    code?: string | number
    stack?: string
  }
}
