import { supabase } from '$lib/supabaseClient'; 

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