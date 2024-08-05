<script lang="ts">
  import ClientContacts from "./ClientContacts.svelte";

  export let name: string;
  export let address: string;
  export let contacts: Array<{
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  }>;
</script>

<div class="w-full bg-neutral-100 p-[32px]">
  <h1 class="w-full text-center text-2xl font-bold font-montserrat">
    INFOS GÉNÉRALES
  </h1>
  <div class="w-full text-[20px]">
    <p>Client:</p>
    <ul class="list-disc pl-5 mb-5">
      <li>
        Nom: <strong>{name}</strong>
      </li>
      <li>
        Adresse: <strong>{address}</strong>
      </li>
    </ul>
  </div>
  <ClientContacts {contacts} />
</div>
