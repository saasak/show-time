import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Environment variables VITE_SUPABASE_URL and VITE_SUPABASE_API_KEY must be defined');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const { id } = params;

    try {
        const { data: client, error: clientError } = await supabase
            .from('clients')
            .select('id, name, address, contacts:contacts (first_name, last_name, email, phone)')
            .eq('id', id)
            .single();

        if (clientError) {
            throw new Error('Error fetching client: ' + clientError.message);
        }

        if (!client) {
            throw new Error('Client not found');
        }

        return {
            client
        };
    } catch (error) {
        console.error('Failed to load client:', error);
        return { client: null };
    }
};