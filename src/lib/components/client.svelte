<script>
  export let clientNumber;
</script>

<div class="bg-slate-100 w-11/12 py-2 mb-2">
  <div class="flex flex-col justify-start items-center">
    <label for="names" class="font-bold justify-start w-11/12"
      >Prénom et nom</label
    >
    <input
      type="text"
      id="{clientNumber}_names"
      name="names-{clientNumber}"
      class="border rounded-lg w-11/12"
      placeholder="Jean Dupont"
      pattern="^[A-Za-zÀ-ÖØ-öø-ÿ ]+$"
      title="Ne peut contenir que des lettres"
      required
    />
  </div>

  <div class="flex flex-col justify-start items-center py-2">
    <label for="email" class="font-bold justify-start w-11/12">Email</label>
    <input
      type="email"
      id="{clientNumber}_email"
      name="email-{clientNumber}"
      class="border rounded-lg w-11/12"
      placeholder="jean.dupont@example.com"
      required
    />
  </div>

  <div class="flex flex-col justify-start items-center py-2">
    <label for="phone" class="font-bold justify-start w-11/12">Téléphone</label>
    <input
      type="tel"
      id="{clientNumber}_phone"
      name="phone-{clientNumber}"
      class="border rounded-lg w-11/12"
      placeholder="0123456789"
      required
    />
  </div>
</div>
