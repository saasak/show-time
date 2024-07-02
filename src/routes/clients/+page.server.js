export const load = (async ({ locals, url }) => {
    // Définition du numéro de la page selon les params, défaut 1
    let page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = 5;
    const start = (page - 1) * limit;
    const end = start + limit -1;

    // Nombre total de clients de la BDD
    const { count } = await locals.services.supabase.from('clients').select('*', { count: 'exact', head: true });

    // Récupération des clients par tranche de 5 selon numéro de page
    try {
    const { error, data } = await locals.services.supabase.from('clients').select(`
        id,
        name,
        address,
        periodicity_in_months,
        contacts (id, first_name, last_name, email, phone)`)
        .range(start, end);

        // Si pas de clients
        if(error){
            return { status: 404, body: 'No client found' };
        }

        // Envoi des la liste clients et du nombre total de clients
        return { clients: data ?? [], count: count ?? 0};
    
    } catch (error){
        // Si erreur de la BDD
        console.error(error);
        return { status: 500, body: 'Internal Server Error' };
    }
});