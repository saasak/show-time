import { supabase } from '$lib/supabaseClient'; 

import type { PageLoad } from './$types';

const PAGE_SIZE = 5;

export const load: PageLoad = async ({ url }) => {

    try {
        const { count: totalCount } = await supabase
            .from('clients')
            .select('id', { count: 'exact' });

        
        if (totalCount && totalCount > 0) {
            const page = parseInt(url.searchParams.get('page') || '1', 10);

            const offset = (page - 1) * PAGE_SIZE;

            const { data: clients, error } = await supabase
                .from('clients')
                .select('id, name, address, contacts:contacts (first_name, last_name, email, phone)')
                .range(offset, offset + PAGE_SIZE - 1);

            if (error) {
                throw new Error('Error fetching clients : ' + error)
            }
        
            const totalPages = Math.ceil(totalCount / PAGE_SIZE);
    
            return {
                clients: clients,
                page,
                totalPages
            };
        }

        else {
            return { clients: [], page: 1, totalPages: 1 };
        }

    } catch (error) {
        console.error('Failed to load clients:', error);
        return { clients: [], page: 1, totalPages: 1 };
    }
};