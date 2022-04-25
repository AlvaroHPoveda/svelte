<script lang="ts">
  import { link, replace } from "svelte-spa-router";
  import { user } from "../stores/authStore";
  import Cart from "../components/Cart.svelte";
  import { cart } from "../stores/productStore";

  let price: number = 0;

  $cart.map((product) => (price += product.precio));

  const handlePaid = () => {
    replace("/paid");
  };
</script>

{#if $user}
  <div class="container row">
    <div class="col-12 col-md-8">
      <h4>Subtotal: ${(price - price * 0.16).toFixed(2)}</h4>
      <h4>IVA: ${(price * 0.16).toFixed(2)}</h4>
      <h4>Envio: ${(price * 0.1).toFixed(2)}</h4>
      <hr />
      <h3>Total a pagar ${(price * 1.1).toFixed(2)}</h3>
      <button class="btn btn-success" on:click={handlePaid}>Realizar pago</button>
    </div>
  </div>
{:else}
  <div class="text-center my-5 container">
    <h2>Login required</h2>
    <div class="row">
      <div class="my-4">
        <a
          class="btn btn-outline-success"
          style="width: 18rem;"
          use:link
          href="/login">login</a
        >
      </div>
      <div>
        <a
          class="btn btn-outline-warning"
          style="width: 18rem;"
          use:link
          href="/login">Register</a
        >
      </div>
    </div>
  </div>
{/if}
