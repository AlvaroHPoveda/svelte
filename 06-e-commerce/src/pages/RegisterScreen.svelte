<script lang="ts">
  import { onMount } from "svelte";
  import { link, replace } from "svelte-spa-router";
  import { firebase } from "../firebase/config";
  import { user } from "../stores/authStore";

  let email: string = "";
  let pass: string = "";
  let pass2: string = "";

  onMount(() => {
    firebase.auth().onAuthStateChanged((userLog) => {
      if (userLog) {
        replace("/");
      }
    });
  });

  const handleRegister = async () => {
    if (pass.length < 6) {
      return;
    }
    if (pass !== pass2) {
      return;
    }

    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass);
    await user.set(data.user);
    replace("/");
  };
</script>

<div class="container text-center">
  <form on:submit|preventDefault={handleRegister} class="mt -3">
    <h1>Register</h1>
    <hr />
    <div class="mb-3">
      <label class="form-label">
        Email Address: <input
          bind:value={email}
          type="email"
          class="form-control"
          placeholder="example@MediaList.com"
        />
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label">
        Password: <input
          bind:value={pass}
          type="password"
          class="form-control"
          placeholder="Insert a secure password"
        />
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label">
        Confirm Password: <input
          bind:value={pass2}
          type="password"
          class="form-control"
          placeholder="Confirm your password"
        />
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Register</button> <br />

    <div class="m-3">
      <a use:link class="text-dark" href="/login">or, Login</a>
    </div>
  </form>
</div>
