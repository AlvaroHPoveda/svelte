<script lang="ts">
  import { fade, scale, slide } from "svelte/transition";
  export let drinkData: any;
</script>

<!-- <div in:scale out:slide class="card m-2" style="width: 18rem;"> -->
<div transition:fade class="card m-2" style="width: 18rem;">
  <img
    loading="lazy"
    src={drinkData.strDrinkThumb}
    class="card-img-top pt-2"
    alt={drinkData.idDrink}
  />
  <div class="card-body">
    <h5 class="card-title">{drinkData.strDrink}</h5>
    <p class="card-text">
      {drinkData.strInstructions}
    </p>
  </div>
</div>
