
export const actions = {
    default: async ({ request, locals }) => {
        // Récupération des données du formulaire
        const client = await request.formData();
        const name = client.get('name');
        const address = client.get('address');

        // En cas d'absence de données
        if(!name || !address){
            return { status: 400, body: 'Nom et adresse obligatoires.' };
        }

        try {
        // Insertion en table clients et récupération de l'élément créé
        const { data, error } = await locals.services.supabase.from('clients').insert({
            name: name,
            address: address,
        })
        .select();

        // En cas d'erreur
        if(error){
            return { status: 400, body: 'Bad Request' };
        } 

        // Si objet bien créé
        if(data) {
            // On définit les données pour la table contacts
            const id = data[0].id;
            const names = client.get('names');
            const firstName = names.split(' ')[0];
            const lastName = names.split(' ')[1];
            const email = client.get('email');
            const phone = client.get('phone');
            try {
                const { error, data } = await locals.services.supabase.from('contacts').insert({
                    client_id: id,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone: phone,
                })
                .select();

                if (error) {
                    return { status: 400, body: 'Bad Request' };
                };

            } catch (error) {
                console.error(error);
                return { status: 500, body: 'Internal Server Error' };
            }
        }
    } catch (error) {
        console.error(error);
        return { status: 500, body: 'Internal Server Error' };
    }
}
};