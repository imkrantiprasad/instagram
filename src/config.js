import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvo-arata40rxTtFsMcRdUBCxzGFRd_uU",
    authDomain: "instagram-9a8ed.firebaseapp.com",
    databaseURL: "https://instagram-9a8ed.firebaseio.com",
    projectId: "instagram-9a8ed",
    storageBucket: "instagram-9a8ed.appspot.com",
    messagingSenderId: "810516190773",
    appId: "1:810516190773:web:8cba6f508bca201178c37c",
    measurementId: "G-8M1XQY0RD8"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};