<script lang="ts">
  import { goto } from "@sapper/app";

  const goToHome = async () => {
    await goto(".",{
        replaceState: true
    });
  };
</script>

<svelte:head>
  <title>Documentacion</title>
</svelte:head>

<h1>Documentacion de la API</h1>
<button on:click={goToHome}>Go to Home</button>
