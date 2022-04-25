import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBT1H-ElVF-EzwqssITCHCIN2VqSAQTHo",
  authDomain: "curso-svelte-27659.firebaseapp.com",
  projectId: "curso-svelte-27659",
  storageBucket: "curso-svelte-27659.appspot.com",
  messagingSenderId: "116350149723",
  appId: "1:116350149723:web:7814949ede6f15b90f4b7e",
};

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };
