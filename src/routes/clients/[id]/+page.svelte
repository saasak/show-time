<script lang="ts">
  import ClientHeader from "./ClientHeader.svelte";
  import ClientInfo from "./ClientInfo.svelte";

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
  {#if data.client}
    <ClientHeader name={data.client.name} />
    <ClientInfo
      name={data.client.name}
      address={data.client.address}
      contacts={data.client.contacts}
    />
  {:else}
    <p>Données du client non disponibles</p>
  {/if}
</section>
