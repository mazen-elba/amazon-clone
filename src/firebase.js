import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA_gTiULqso1nlrWIw8hYqvTzuOKCqismk",
  authDomain: "clone-db13c.firebaseapp.com",
  databaseURL: "https://clone-db13c.firebaseio.com",
  projectId: "clone-db13c",
  storageBucket: "clone-db13c.appspot.com",
  messagingSenderId: "630788655903",
  appId: "1:630788655903:web:da1f9aaf16a7f9cdbebe2a",
  measurementId: "G-BTV9EG4DX3",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
