<script>
  export let data;
</script>

<svelte:head>
  <title>Page client</title>
  <meta name="description" content="Détails d'un client" />
</svelte:head>

<section class="flex flex-col items-center font-mono">
  {#if data}
    <div
      class="flex justify-between w-full ml-5 font-bold items-center content-start text-2xl mb-5 mt-5"
    >
      <a href="/clients" class="text-5xl">←</a>
      <h2 class="font-bold text-2xl mb-5 mt-5">{data.client?.name}</h2>
      <div></div>
    </div>

    <div class="bg-slate-100 p-5 w-11/12">
      <h3 class="flex justify-center font-bold text-2xl mb-5 mt-5">
        INFOS GENERALES
      </h3>
      <div>Client :</div>
      <ul class="list-disc pl-5">
        <li>Nom : <strong>{data.client?.name}</strong></li>
        <li>Adresse : <strong>{data.client?.address}</strong></li>
      </ul>
      <div class="my-5">Contacts :</div>
      {#each data.client.contacts as contact}
        <div class="my-10">
          <div>
            Nom : <strong>{contact.first_name} {contact.last_name}</strong>
          </div>
          <div>Email : <strong>{contact.email}</strong></div>
          <div>Tel : <strong>{contact.phone}</strong></div>
        </div>
      {/each}
    </div>
  {:else}
    <div>Client non trouvé.</div>
  {/if}
</section>
