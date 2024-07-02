// GESTION DE L'AJOUT D'UN NOUVEAU CLIENT
export const actions = {
    default: async ({ request, locals }) => {
        // Récupération des données du formulaire
        const client = await request.formData();
        const name = client.get('name');
        const address = client.get('address');

        //Vérification des données
        //Absence de données
        if(!name || !address){
            return { status: 400, error: 'Nom et adresse obligatoires.' };
        }
        // Vérification du nom du client
        const clientRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ']+$/;
        if(!clientRegex.test(name) || !clientRegex.test(address)){
            return { status: 400, error: 'Nom invalide.' };
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

            // Tableau pour stocker les contacts
            let clientArray = [];

            // Récupération des infos des contacts par leur numéro et ajout au tableau
            const clientNumber = client.get('clientNumber');
            for (let i = 0; i < clientNumber; i++) {
                const names = client.get('names-'+i);
                const first_name = names.split(' ')[0];
                const last_name = names.split(' ')[1];
                const email = client.get('email-'+i);
                const phone = client.get('phone-'+i);
                
                // Vérification des données
                const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ']+$/;
                if(!nameRegex.test(first_name) || !nameRegex.test(last_name)){
                    return { status: 400, error: 'Nom invalide.' };
                }

                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if(!emailRegex.test(email)){
                    return { status: 400, error: 'Mail invalide.' };
                }

                const phoneRegex = /^[0-9 \-]+$/;
                if(!phoneRegex.test(phone)){
                    return { status: 400, error: 'Téléphone invalide.' };
                }

                clientArray.push({client_id, first_name, last_name, email, phone});
            }

            try {
                // Insertion en table contacts
                const { error } = await locals.services.supabase.from('contacts').insert(clientArray);
                // Envoi du message d'erreur en cas d'échec
                if(error){
                    return { status: 400, error: 'Bad Request' };
                }
                // Envoi de la confirmation
                return { status: 200, success: 'Client ajouté avec succès.' };

                // En cas d'erreur du serveur
            } catch (error) {
                console.error(error);
                return { status: 500, body: 'Internal Server Error' };
            }
        }

        // Si erreur lors de la création du client et des contacts
    } catch (error) {
        console.error(error);
        return { status: 500, body: 'Internal Server Error' };
    }
}
};