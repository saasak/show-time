export const load = (async ({ locals, url }) => {
    let page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = 5;
    const start = (page - 1) * limit;
    const end = start + limit -1;

    const { count } = await locals.services.supabase.from('clients').select('*', { count: 'exact', head: true });

    try {
    const { error, data } = await locals.services.supabase.from('clients').select(`
        id,
        name,
        address,
        periodicity_in_months,
        contacts (id, first_name, last_name, email, phone)`)
        .range(start, end);
        if(error){
            return { status: 404, body: 'No client found' };
        }
        
        return { clients: data ?? [], page, count: count ?? 0};
    } catch (error){
        console.error(error);
        return { status: 500, body: 'Internal Server Error' };
    }
});