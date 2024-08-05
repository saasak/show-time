<script>
  export let title = "Nouveau client";
</script>

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
  <h1 class="text-center text-5xl font-bold font-lexend">{title}</h1>
</div>
