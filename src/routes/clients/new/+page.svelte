<script>
  import Header from "./NewHeader.svelte";
  import ClientForm from "./ClientForm.svelte";
  import AddContactButton from "./AddContactButton.svelte";
  import SubmitButton from "./SubmitButton.svelte";

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
  <Header title="Nouveau client" />

  <form method="POST">
    <ClientForm {contactForms} {addContact} />
    <AddContactButton {addContact} />
    <SubmitButton />
  </form>
</section>
