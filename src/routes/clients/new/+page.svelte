<script>
  import Client from "$lib/components/client.svelte";
  let clientNumber = 1;
  function addClient() {
    clientNumber += 1;
  }
  export let form;
</script>

<svelte:head>
  <title>Nouveau client</title>
  <meta name="description" content="Détails d'un client" />
</svelte:head>

<section class="flex flex-col font-mono">
  <div
    class="flex justify-between w-full ml-5 font-bold items-center content-start text-2xl mb-5 mt-5"
  >
    <a href="/clients" class="text-5xl">←</a>
    <h2 class="font-bold text-2xl mb-5 mt-5">Nouveau client</h2>
    <div></div>
  </div>

  {#if form?.success}
    <p class="flex justify-center align-center text-red">
      Client et contacts ajoutés avec succès !
    </p>
  {/if}

  {#if form?.error}
    <p class="flex justify-center align-center text-red-600">
      Erreur lors de l'ajout du client et des contacts
    </p>
  {/if}

  <form method="POST">
    <input type="hidden" value={clientNumber} name="clientNumber" />
    <div class="flex flex-col justify-start items-center py-2">
      <label for="name" class="font-bold justify-start w-11/12"
        >Nom du client</label
      >
      <input
        type="text"
        id="name"
        name="name"
        class="border rounded-lg w-11/12"
        placeholder="Société industrielle ABC"
        pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ']+$"
        title="Ne peut contenir que des lettres et des chiffres"
        required
      />
    </div>

    <div class="flex flex-col items-center py-2">
      <label for="address" class="font-bold justify-start w-11/12"
        >Adresse</label
      >
      <input
        type="text"
        id="address"
        name="address"
        class="border rounded-lg w-11/12"
        placeholder="123 rue de la Paix, 75000 Paris"
        pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ']+$"
        title="Ne peut contenir que des lettres et des chiffres"
        required
      />
    </div>

    <div class="flex flex-col justify-start items-center py-2">
      <span class="font-bold justify-start w-11/12 py-2"
        >Contacts dans l'entreprise</span
      >

      {#each Array.from({ length: clientNumber }) as _, i}
        <Client clientNumber={i} />
      {/each}

      <button
        class="bg-slate-100 m-2 text-slate-500 rounded-full py-2 px-5"
        type="button"
        on:click={addClient}>+ Ajouter un contact</button
      >

      <button
        class="bg-blue-950 m-2 text-white rounded-full py-2 px-5"
        type="submit">✓ Créer le client</button
      >
    </div>
  </form>
</section>
