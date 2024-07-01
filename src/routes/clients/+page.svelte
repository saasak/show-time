<script>
  export let data;
</script>

<svelte:head>
  <title>Suivi clients</title>
  <meta name="description" content="Suivi des clients" />
</svelte:head>

<section class="flex flex-col justify-center items-center font-mono">
  <h2 class="font-bold text-2xl mb-20 mt-5">Suivi Client</h2>

  {#if !data.clients}
    <div class="text-2xl">Aucun client trouvé.</div>
  {/if}
  {#each data.clients as client}
    <a
      href="/clients/{client.id}"
      class="flex bg-slate-100 mb-5 p-5 justify-between w-11/12 items-center"
    >
      <div class="font-bold text-xl">{client.name}</div>

      <div>
        {#each client.contacts as contact}
          <div>Contact : {contact.first_name} {contact.last_name}</div>
          <div>Tel: {contact.phone}</div>
        {/each}
        <div>{client.address}</div>
      </div>
    </a>
  {/each}

  <a
    href="/clients/new"
    class="bg-blue-950 m-2 text-white rounded-full py-2 px-5"
    >+ Ajouter un client</a
  >
</section>
