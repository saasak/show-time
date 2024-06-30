<script>
</script>

<svelte:head>
  <title>Nouveau client</title>
  <meta name="description" content="Détails d'un client" />
</svelte:head>

<section class="flex flex-col items-center font-mono">
  <h2 class="font-bold text-2xl mb-5 mt-5">Nouveau client</h2>

  <form>
    <div class="flex flex-col items-center w-11/12">
      <label for="name">Nom du client</label>
      <input type="text" id="name" name="name" class="border rounded-lg" />
    </div>

    <div class="flex flex-col items-center">
      <label for="address">Adresse</label>
      <input
        type="text"
        id="address"
        name="address"
        class="border rounded-lg"
      />
    </div>
    <div class="flex flex-col items-center">
      <span>Contacts dans l'entreprise</span>
      <div class="bg-slate-100">
        <label for="contacts">Prénom et nom</label>
        <input
          type="text"
          id="contacts"
          name="contacts"
          class="border rounded-lg"
        />

        <div class="flex flex-col items-center">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="border rounded-lg"
          />
        </div>
        <div class="flex flex-col items-center">
          <label for="phone">Téléphone</label>
          <input type="tel" id="phone" name="phone" class="border rounded-lg" />
        </div>
      </div>

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit">Créer</button
      >
    </div>
  </form>
</section>
