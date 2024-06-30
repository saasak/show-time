<script>
  export let client;
  console.log(client);
</script>

<svelte:head>
  <title>Page client</title>
  <meta name="description" content="Détails d'un client" />
</svelte:head>

<section class="flex flex-col items-center font-mono">
  <h2 class="font-bold text-2xl mb-5 mt-5">Détails du Client</h2>

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
