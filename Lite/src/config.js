import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBReN70ekaqzNUvmDd5rfZ81I8XDYjCUow",
  authDomain: "lights-up.firebaseapp.com",
  databaseURL: "https://lights-up.firebaseio.com",
  projectId: "lights-up",
  storageBucket: "lights-up.appspot.com",
  messagingSenderId: "48925337340"
};
const firebaseApp =  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : null;
export const db = firebaseApp.database();
