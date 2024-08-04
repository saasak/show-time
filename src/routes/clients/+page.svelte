<script lang="ts">
  import ClientList from "./ClientList.svelte";
  import Pagination from "./Pagination.svelte";

  export let data;

  $: currentPage = data.page;
  $: totalPages = data.totalPages;
  $: clients = data.clients;
</script>

<svelte:head>
  <title>Suivi client</title>
  <meta name="description" content="Suivi client" />
</svelte:head>

<section class="flex flex-col min-h-screen p-[40px] font-montserrat">
  <div class="h-32 w-full p-10">
    <h1 class="text-center text-5xl font-bold font-lexend">Suivi client</h1>
  </div>

  <ClientList {clients} />

  <Pagination {currentPage} {totalPages} />

  <div class="flex justify-end mt-5">
    <a
      href="clients/new"
      class="px-4 py-2 text-white text-lg bg-deep-breath rounded-full transition-all duration-300 flex items-center"
    >
      <p class="mr-2">+</p>
      <p>Ajouter un client</p>
    </a>
  </div>
</section>
