<script>
  import Header from "$lib/components/header.svelte";
  import "../app.css";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer></footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
