<script lang="ts">
  import Counter from "./components/Counter.svelte";
  import Saludo from "./components/Saludo.svelte";

  let inicialValue = 30;
</script>

<Saludo title="Counter App" />
<Counter inicialValue={90} />
<Counter {inicialValue} />
