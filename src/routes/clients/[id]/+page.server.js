import { error } from '@sveltejs/kit';

export const load = (async ({ locals, params }) => {
    // Récupération de l'id du client
    let {id} = params;

    // Récupération des données du client de la BDD
    try {
        const { error:e, data } = await locals.services.supabase.from('clients').select(`
            id,
            name,
            address,
            periodicity_in_months,
            contacts (id, first_name, last_name, email, phone)`)
            .eq('id', id)
            .single();

            // Si pas de client trouvé
            if(e) {
                error(404, {
                    message : 'Not Found'
                })
                return { status: 404, body: 'Not Found' };
            }
            return { client: data };

    // En cas d'erreur serveur
    } catch (error){
        console.error(error);
        return { status: 500, body: 'Internal Server Error' };
    }
});