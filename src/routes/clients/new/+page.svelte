<script>
  import { onMount } from "svelte";
  import ContactForm from "./ContactForm.svelte";

  let contactForms = [{}];

  function addContact() {
    contactForms = [...contactForms, {}];
  }
</script>

<svelte:head>
  <title>Nouveau client</title>
  <meta name="description" content="Nouveau client" />
</svelte:head>

<section class="flex flex-col min-h-screen p-[40px]">
  <div class="relative flex items-center justify-center h-32 w-full p-10">
    <a
      href="/clients"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center h-full w-[50px]"
    >
      <svg
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
    <h1 class="text-center text-5xl font-bold font-lexend">Nouveau client</h1>
  </div>

  <form method="POST">
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
    <div class="flex justify-center mt-5">
      <button
        on:click={addContact}
        type="button"
        class="px-4 py-2 text-neutral-600 text-lg bg-neutral-100 rounded-full transition-all duration-300 flex items-center"
      >
        <p class="mr-2">+</p>
        <p>Ajouter un contact</p>
      </button>
    </div>
    <div class="flex justify-center mt-5">
      <button
        class="px-4 py-2 text-white text-lg bg-deep-breath rounded-full transition-all duration-300 flex items-center"
      >
        <p class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </p>
        <p>Créer le client</p>
      </button>
    </div>
  </form>
</section>
