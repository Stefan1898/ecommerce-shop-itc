// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5bUvqIrwngolLXpNzog1_ancUMg9naE",
  authDomain: "e-commerce-shop-itc.firebaseapp.com",
  projectId: "e-commerce-shop-itc",
  storageBucket: "e-commerce-shop-itc.appspot.com",
  messagingSenderId: "738989843441",
  appId: "1:738989843441:web:85bfda1b89e2908ae2fed8",
  measurementId: "G-YT9ZKMW3QS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
