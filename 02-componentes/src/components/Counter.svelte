<script lang="ts">
  export let inicialValue: number = 0;

  const handleClick = () => {
    inicialValue++;
  };
</script>

<div>
  <h2>Counter: {inicialValue}</h2>
  <button class="btn" on:click={handleClick}>+1</button>
</div>

<style>
  div {
    text-align: center;
  }
  h2 {
    color: snow;
  }
  .btn {
    cursor: pointer;
  }
</style>
