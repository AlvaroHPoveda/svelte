<script lang="ts">
  import { cart } from "../stores/productStore";

  export let product: any;

  const handleAddCart = () => {
    cart.set([...$cart, product]);
  };
</script>

<div class="card m-3" style="width: 18rem; height: 30rem">
  <img
    src={product.img}
    alt={product.nombre}
    class="card-img-top"
    style=" height: 20rem"
    loading="lazy"
  />
  <div class="card-body text-center">
    <h5 class="card-title ">{product.nombre}</h5>
    <p class="card-text">${product.precio} COP</p>
    <button on:click={handleAddCart} class="btn btn-primary"
      >Agregar al carrito</button
    >
  </div>
</div>
