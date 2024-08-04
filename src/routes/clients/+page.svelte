<script lang="ts">
  export let data;

  function getPageUrl(page: number | string) {
    return new URLSearchParams({ page: page.toString() }).toString();
  }

  function generatePageNumbers(currentPage: number, totalPages: number) {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage < 3) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (currentPage > totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pageNumbers;
  }

  $: pageNumbers = generatePageNumbers(data.page, data.totalPages);
</script>

<svelte:head>
  <title>Suivi client</title>
  <meta name="description" content="Suivi client" />
</svelte:head>

<section class="flex flex-col min-h-screen p-[40px]">
  <div class="h-32 w-full p-10">
    <h1 class="text-center text-5xl font-bold">Suivi client</h1>
  </div>

  <ul class="pl-5">
    {#if data.clients && data.clients.length > 0}
      {#each data.clients as client}
        <li class="mb-4">
          <a
            tabindex="0"
            href="clients/{client.id}"
            class="h-[148px] rounded-[5px] flex justify-between p-[28px] items-center bg-neutral-100"
          >
            <p class="text-2xl font-bold">{client.name}</p>
            <div class="w-1/5">
              <p>
                Contact: {client.contacts[0].first_name}
                {client.contacts[0].last_name}
              </p>
              <p>Tel: {client.contacts[0].phone}</p>
              <p>{client.address}</p>
            </div>
          </a>
        </li>
      {/each}
    {:else}
      <p class="text-center text-gray-500">No clients found</p>
    {/if}
  </ul>

  <div class="flex justify-end mt-5 space-x-2">
    {#if data.page && data.page > 1}
      <a
        href="?{getPageUrl(data.page - 1)}"
        class="px-4 py-2 hover:border hover:rounded-full hover:border-neutral-300 flex items-center transition-all duration-300"
        aria-label="Previous page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Précédente
      </a>
    {/if}

    {#each pageNumbers as page}
      {#if page === "..."}
        <span class="px-4 py-2">...</span>
      {:else}
        <a
          href="?{getPageUrl(page)}"
          class="px-4 py-2 hover:border hover:rounded-full hover:border-neutral-300 flex items-center transition-all duration-300"
          class:rounded-full={data.page === page}
          class:border={data.page === page}
        >
          {page}
        </a>
      {/if}
    {/each}

    {#if data.page && data.page < data.totalPages}
      <a
        href="?{getPageUrl(data.page + 1)}"
        class="px-4 py-2 hover:border hover:rounded-full hover:border-neutral-300 flex items-center transition-all duration-300"
        aria-label="Next page"
      >
        Suivante
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </a>
    {/if}
  </div>
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
