<script lang="ts">
  export let contacts: Array<{
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  }>;
</script>

<div class="w-full text-[20px]">
  <p class="mb-5">Contacts:</p>
  {#each contacts as contact}
    <div class="mb-5">
      <p>
        Nom : <strong>{contact.first_name} {contact.last_name}</strong>
      </p>
      <p>Email: <strong>{contact.email}</strong></p>
      <p>Tel: <strong>{contact.phone}</strong></p>
    </div>
  {/each}
</div>
