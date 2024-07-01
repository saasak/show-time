<script>
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

  <form method="POST">
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
        pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$"
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
        pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$"
        title="Ne peut contenir que des lettres et des chiffres"
        required
      />
    </div>

    <div class="flex flex-col justify-start items-center py-2">
      <span class="font-bold justify-start w-11/12 py-2"
        >Contacts dans l'entreprise</span
      >

      <div class="bg-slate-100 w-11/12 py-2">
        <div class="flex flex-col justify-start items-center">
          <label for="names" class="font-bold justify-start w-11/12"
            >Prénom et nom</label
          >
          <input
            type="text"
            id="names"
            name="names"
            class="border rounded-lg w-11/12"
            placeholder="Jean Dupont"
            pattern="^[A-Za-zÀ-ÖØ-öø-ÿ ]+$"
            title="Ne peut contenir que des lettres"
            required
          />
        </div>

        <div class="flex flex-col justify-start items-center py-2">
          <label for="email" class="font-bold justify-start w-11/12"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="border rounded-lg w-11/12"
            placeholder="jean.dupont@example.com"
            required
          />
        </div>

        <div class="flex flex-col justify-start items-center py-2">
          <label for="phone" class="font-bold justify-start w-11/12"
            >Téléphone</label
          >
          <input
            type="tel"
            id="phone"
            name="phone"
            class="border rounded-lg w-11/12"
            placeholder="0123456789"
            required
          />
        </div>
      </div>

      <button
        class="bg-blue-950 m-2 text-white rounded-full py-2 px-5"
        type="submit">✓ Créer le client</button
      >
    </div>
  </form>
</section>
