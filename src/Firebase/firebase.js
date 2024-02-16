// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { auth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDclnWRDCrmYxEYcYI15zg9cY1BbGq_W6I",
  authDomain: "dev-range-374105.firebaseapp.com",
  projectId: "dev-range-374105",
  storageBucket: "dev-range-374105.appspot.com",
  messagingSenderId: "367822731615",
  appId: "1:367822731615:web:00b7c4ff8de6c012ec1eea",
  measurementId: "G-KV9TL83WDE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize the db
const db = getFirestore(app);
export { db };
