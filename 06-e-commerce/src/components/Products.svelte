<script lang="ts">
  import { onMount } from "svelte";
  import Product from "./Product.svelte";
  import { db } from "../models/db";
  import { products } from "../stores/productStore";

  onMount(() => {
    products.set(db);
  });
</script>

<div class="row">
  {#each $products as product}
    <div class="col-12 col-md-4">
      <Product {product} />
    </div>
  {/each}
</div>
