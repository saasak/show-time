import { error } from '@sveltejs/kit';

export const load = (async ({ locals, params }) => {
    let {id} = params;

    try {
        const { error:e, data } = await locals.services.supabase.from('clients').select(`
            id,
            name,
            address,
            periodicity_in_months,
            contacts (id, first_name, last_name, email, phone)`)
            .eq('id', id)
            .single();

            if(e) {
                error(404, {
                    message : 'Not Found'
                })
                return { status: 404, body: 'Not Found' };
            }
            return { client: data };

    } catch (error){
        console.error(error);
        return { status: 500, body: 'Internal Server Error' };
    }
});