<script lang="ts">
  import { onMount } from "svelte";
  import { link, replace } from "svelte-spa-router";
  import GoogleAuthButton from "../components/GoogleAuthButton.svelte";
  import { firebase, googleAuthProvider } from "../firebase/config";
  import { user } from "../stores/authStore";

  let email: string = "";
  let pass: string = "";

  onMount(() => {
    firebase.auth().onAuthStateChanged((userLog) => {
      if (userLog) {
        replace("/");
      }
    });
  });

  const handleGoogleLogin = async () => {
    await firebase.auth().signInWithRedirect(googleAuthProvider);
  };

  const handleEmailLogin = async () => {
    if (pass.length < 6) {
      return;
    }

    const data = await firebase
      .auth()
      .signInWithEmailAndPassword(email, pass);
    await user.set(data.user);
    replace("/");
  };
</script>

<div class="container text-center">
  <form on:submit|preventDefault={handleEmailLogin} class="mt -3">
    <h1>Login</h1>
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
    <button type="submit" class="btn btn-primary">Login</button> <br />
    <GoogleAuthButton handleLogin={handleGoogleLogin} />
    <div class="m-3">
      <a use:link class="text-dark" href="/register">Create Account</a>
    </div>
  </form>
</div>
