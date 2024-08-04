<script lang="ts">
  export let data;
</script>

<svelte:head>
  {#if data.client}
    <title>{data.client.name}</title>
    <meta name="description" content={data.client.name} />
  {:else}
    <title>Données non disponibles</title>
    <meta name="description" content="Données non disponibles" />
  {/if}
</svelte:head>

<section class="flex flex-col min-h-screen p-[40px] font-montserrat-alternate">
  <div class="relative flex items-center justify-center h-32 w-full p-10">
    <a
      href="/clients"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full w-[50px]"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </a>

    {#if data.client}
      <h1 class="text-center text-5xl font-bold font-lexend">
        {data.client.name}
      </h1>
    {/if}
  </div>

  <div class="w-full bg-neutral-100 p-[32px]">
    <h1 class="w-full text-center text-2xl font-bold font-montserrat">
      INFOS GÉNÉRALES
    </h1>
    <div class="w-full text-[20px]">
      {#if data.client}
        <p>Client:</p>
        <ul class="list-disc pl-5 mb-5">
          <li>
            Nom: <strong>{data.client.name}</strong>
          </li>
          <li>
            Adresse: <strong>{data.client.address}</strong>
          </li>
        </ul>
        <p class="mb-5">Contacts:</p>
        {#each data.client.contacts as contact}
          <div class="mb-5">
            <p>
              Nom : <strong>{contact.first_name} {contact.last_name}</strong>
            </p>
            <p>Email: <strong>{contact.email}</strong></p>
            <p>Tel: <strong>{contact.phone}</strong></p>
          </div>
        {/each}
      {:else}
        <p>Données du client non disponibles</p>
      {/if}
    </div>
  </div>
</section>
