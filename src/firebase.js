import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB0iCoI3RpzY-q43YT-t9sZHuM65vV4TPc",
  authDomain: "rent-it-69154.firebaseapp.com",
  projectId: "rent-it-69154",
  storageBucket: "rent-it-69154.appspot.com",
  messagingSenderId: "361935140825",
  appId: "1:361935140825:web:90de1371403b860ab90bc8"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
const FieldValue = firebase.firestore.FieldValue;

export { db, auth, provider, storage, FieldValue };
