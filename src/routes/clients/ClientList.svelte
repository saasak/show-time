<script lang="ts">
  export let clients: Array<{
    id: number;
    name: string;
    contacts: Array<{ first_name: string; last_name: string; phone: string }>;
    address: string;
  }>;
</script>

<ul class="pl-5">
  {#if clients && clients.length > 0}
    {#each clients as client}
      <li class="mb-4">
        <a
          tabindex="0"
          href="clients/{client.id}"
          class="h-[148px] rounded-[5px] flex justify-between p-[28px] items-center bg-neutral-100"
        >
          <p class="text-2xl font-bold">{client.name}</p>
          <div class="w-1/5">
            <p>
              Contact: {client.contacts[0].first_name}
              {client.contacts[0].last_name}
            </p>
            <p>Tel: {client.contacts[0].phone}</p>
            <p>{client.address}</p>
          </div>
        </a>
      </li>
    {/each}
  {:else}
    <p class="text-center text-gray-500">No clients found</p>
  {/if}
</ul>
