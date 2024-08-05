<script>
  export let addContact;
</script>

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
