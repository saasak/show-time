<script lang="ts">
  export let currentPage: number;
  export let totalPages: number;

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

  $: pageNumbers = generatePageNumbers(currentPage, totalPages);
</script>

<div class="flex justify-end mt-5 space-x-2">
  {#if currentPage > 1}
    <a
      href="?{getPageUrl(currentPage - 1)}"
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
        class:rounded-full={currentPage === page}
        class:border={currentPage === page}
      >
        {page}
      </a>
    {/if}
  {/each}

  {#if currentPage < totalPages}
    <a
      href="?{getPageUrl(currentPage + 1)}"
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
