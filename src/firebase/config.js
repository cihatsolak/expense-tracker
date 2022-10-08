// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjvPkG_HS3-C_M18BG0ZlgtQZ8PWSPSTA",
  authDomain: "pure-coda-293609.firebaseapp.com",
  projectId: "pure-coda-293609",
  storageBucket: "pure-coda-293609.appspot.com",
  messagingSenderId: "789229791520",
  appId: "1:789229791520:web:4b98c57ae544ff5945cf45"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth }