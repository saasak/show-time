<script>
  import ContactForm from "./ContactForm.svelte";
  export let contactForms = [];
  export let addContact;
</script>

<div class="space-y-12 w-full">
  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div class="sm:col-span-6 w-full">
      <label for="name" class="block text-xl font-bold leading-6"
        >Nom du client</label
      >
      <div class="mt-2 w-full">
        <div
          class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <input
            required
            type="text"
            name="name"
            id="name"
            class="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
    <div class="sm:col-span-6 w-full">
      <label for="address" class="block text-xl font-bold leading-6"
        >Adresse</label
      >
      <div class="mt-2 w-full">
        <div
          class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <input
            required
            type="text"
            name="address"
            id="address"
            class="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
    <div class="sm:col-span-6 w-full">
      <h1 class="font-bold text-xl">Contacts dans l'entreprise</h1>
      {#each contactForms as _, index}
        <ContactForm {index} />
      {/each}
    </div>
  </div>
</div>
