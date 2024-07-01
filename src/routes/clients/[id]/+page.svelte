<script>
  export let client;
</script>

<svelte:head>
  <title>Page client</title>
  <meta name="description" content="Détails d'un client" />
</svelte:head>

<section class="flex flex-col items-center font-mono">
  <div
    class="flex justify-between w-full ml-5 font-bold items-center content-start text-2xl mb-5 mt-5"
  >
    <a href="/clients" class="text-5xl">←</a>
    <h2 class="font-bold text-2xl mb-5 mt-5">Nouveau client</h2>
    <div></div>
  </div>

  {#if client}
    <div class="bg-slate-100 p-5 w-11/12">
      <div><strong>Nom:</strong> {client.name}</div>
      <div><strong>Adresse:</strong> {client.address}</div>
      <div><strong>Contacts:</strong></div>
      {#each client.contacts as contact}
        <div>
          - {contact.first_name}
          {contact.last_name}, {contact.email}, {contact.phone}
        </div>
      {/each}
    </div>
  {:else}
    <div>Client non trouvé.</div>
  {/if}
</section>
