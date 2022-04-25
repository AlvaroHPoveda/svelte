<script lang="ts">
  import Router, { link } from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";

  // import About from "./pages/About.svelte";
  // import Home from "./pages/Home.svelte";
  // import Error from "./pages/Error.svelte";

  const routes = {
    "/": wrap({
      asyncComponent: () => import("./pages/Home.svelte"),
    }),
    "/about": wrap({
      asyncComponent: () => import("./pages/About.svelte"),
    }),
    "*": wrap({
      asyncComponent: () => import("./pages/Error.svelte"),
    }),
  };
</script>

<main>
  <ul>
    <li>
      <a href="/" use:link>Home</a>
    </li>
    <li>
      <a href="/about" use:link>About</a>
    </li>
    <li>
      <a href="/404" use:link>Error</a>
    </li>
  </ul>
  <Router {routes} />
</main>
