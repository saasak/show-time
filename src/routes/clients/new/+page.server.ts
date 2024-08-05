import { supabase } from '$lib/supabaseClient'; 

type Contact = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
};

const splitContactName = (fullName: string): { firstName: string; lastName: string } => {
    const nameParts = fullName.trim().split(/\s+/);
    if (nameParts.length > 1) {
        const firstName = nameParts.slice(0, -1).join(' ');
        const lastName = nameParts.slice(-1).join(' ');
        return { firstName, lastName };
    } else {
        return { firstName: '', lastName: fullName };
    }
};

export const actions = {
	default: async ({ request }) => {
		const clientData = await request.formData();
        const name = clientData.get('name');
        const address = clientData.get('address');
        
        const contacts: Contact[] = [];
        
        for (let key of clientData.keys()) {
            const match = key.match(/(contact-name|email|phone)-(\d+)/);
            if (match) {
                const [, field, index] = match;
                if (!contacts[index]) {
                    contacts[index] = {};
                }
                if (field === 'contact-name') {
                    const { firstName, lastName } = splitContactName(clientData.get(key));
                    contacts[index].firstName = firstName;
                    contacts[index].lastName = lastName;
                } else {
                    contacts[index][field.replace(/-\d+/, '')] = clientData.get(key);
                }
            }
        }
        
        const { data: clientId, error } = await supabase
            .from('clients')
            .insert([
                { name: name, address: address },
            ])
            .select('id')
        
        if (error) {
            throw new Error('Error creating client: ' + error.message);
        }
        
        for (let contact of contacts) {
            const { error: contactError } = await supabase
            .from('contacts')
            .insert([
                { first_name: contact.firstName, last_name: contact.lastName, email: contact.email, phone: contact.phone, client_id: clientId[0].id },
            ])

            if (contactError) {
                const {  } = await supabase
                    .from('clients')
                    .delete()
                    .eq('id', clientId[0].id)
                const {  } = await supabase
                    .from('contacts')
                    .delete()
                    .eq('client_id', clientId[0].id)
                throw new Error('Error creating contact: ' + contactError.message);
            }
        }
        
        return {success : true}
	}
};