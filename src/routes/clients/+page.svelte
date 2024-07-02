<script>
  export let data;
  import { page } from "$app/stores";

  // Pagination
  let totalClients = data.count;
  let clientsPerPage = 5;
  let currentPage =
    parseInt($page.url.searchParams.get("page") || "1", 10) || 1;
  let totalPages = Math.ceil(totalClients / clientsPerPage);
  function nextPage() {
    currentPage++;
  }

  function previousPage() {
    currentPage--;
  }
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

  <div class="flex flex-col items-end justify-end w-11/12">
    <div class="flex items-center">
      {#if currentPage > 1}
        <a
          on:click={previousPage}
          href="/clients?page={currentPage}"
          class="py-2 px-5">&#60; Précédente</a
        >
      {/if}

      {#if currentPage - 1 >= 2}
        <span class="mr-2"> ... </span>
      {/if}

      <div>
        {#if currentPage > 1}
          {currentPage - 1}
        {/if}
        <span
          class="border border-solid border-slate-150 border-2 py-2 px-3 rounded-full"
        >
          {currentPage}
        </span>
        {currentPage + 1}
      </div>

      {#if currentPage + 1 < totalPages}
        <span class="ml-2"> ... </span>
      {/if}

      {#if currentPage < totalPages}
        <a
          href="/clients?page={currentPage}"
          class="py-2 px-5"
          on:click={nextPage}>Suivante &#62;</a
        >
      {/if}
    </div>

    <a href="/clients/new" class="bg-blue-950 m-2 text-white rounded-full p-4"
      >+ Ajouter un client</a
    >
  </div>
</section>
