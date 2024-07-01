
export const load = (async ({ locals, request }) => {
    const newClient = request.body;
    try {
        const { error } = await locals.services.supabase.from('clients').insert({
            //name: newClient.name,
            //address: newClient.address,

        })
        if(error){
            return { status: 400, body: 'Bad Request' };
        }
        return { status: 201, body: 'Created' };
    } catch (error){
        console.error(error);
        return { status: 500, body: 'Internal Server Error' };
    }
}
);