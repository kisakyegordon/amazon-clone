import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuXVsG5JM3iKw_SOg5lFDhZcb7-_6oA6I",
  authDomain: "clone-c0a53.firebaseapp.com",
  databaseURL: "https://clone-c0a53.firebaseio.com",
  projectId: "clone-c0a53",
  storageBucket: "clone-c0a53.appspot.com",
  messagingSenderId: "623815868944",
  appId: "1:623815868944:web:9dac17fb14b4fb6bb64095",
  measurementId: "G-ZXSPSBBCR3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
