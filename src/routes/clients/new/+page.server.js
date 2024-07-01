
export const actions = {
    default: async ({ request, locals }) => {
        // Récupération des données du formulaire
        const client = await request.formData();
        console.log(client)
        const name = client.get('name');
        const address = client.get('address');

        let clientArray = [];

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
            const client_id = data[0].id;

            const clientNumber = client.get('clientNumber');
            for (let i = 0; i < clientNumber; i++) {
                const names = client.get('names-'+i);
                const first_name = names.split(' ')[0];
                const last_name = names.split(' ')[1];
                const email = client.get('email-'+i);
                const phone = client.get('phone-'+i);
                
                clientArray.push({client_id, first_name, last_name, email, phone});
            }
            try {
                // Insertion en table contacts
                const { error } = await locals.services.supabase.from('contacts').insert(clientArray);
                if(error){
                    return { status: 400, error: 'Bad Request' };
                }
                return { status: 200, success: 'Client ajouté avec succès.' };
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