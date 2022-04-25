<script lang="ts">
  import { onMount } from "svelte";
  import { firebase } from "./firebase/config";
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import { routes } from "./router/router";
  import { user } from "./stores/authStore";
  import Cart from "./components/Cart.svelte";

  onMount(() => {
    firebase.auth().onAuthStateChanged((userLog) => {
      if (userLog) {
        user.set(userLog);
      } else {
        user.set(null);
      }
    });
  });
</script>

<div>
  <Navbar />
  <div class="container text-end mt-3">
    <Cart />
  </div>
  <Router {routes} />
</div>
