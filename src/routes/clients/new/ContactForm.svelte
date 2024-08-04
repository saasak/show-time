<script>
  export let index;
</script>

<div
  class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-neutral-100 p-[8px] mt-[28px]"
>
  <div class="sm:col-span-6 w-full">
    <label
      for={`contact-name-${index}`}
      class="block text-xl font-bold leading-6">Prénom et nom</label
    >
    <div class="mt-2 w-full">
      <div
        class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
      >
        <input
          required
          type="text"
          name={`contact-name-${index}`}
          id={`contact-name-${index}`}
          class="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
  <div class="sm:col-span-6 w-full">
    <label for={`email-${index}`} class="block text-xl font-bold leading-6"
      >Email</label
    >
    <div class="mt-2 w-full">
      <div
        class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
      >
        <input
          required
          type="email"
          name={`email-${index}`}
          id={`email-${index}`}
          class="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
  <div class="sm:col-span-6 w-full">
    <label for={`phone-${index}`} class="block text-xl font-bold leading-6"
      >Téléphone</label
    >
    <div class="mt-2 w-full">
      <div
        class="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
      >
        <input
          required
          type="tel"
          pattern="^((\+33|0)[1-9])(?:[ _.-]?(\d{2})){4}$"
          name={`phone-${index}`}
          id={`phone-${index}`}
          class="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
</div>
