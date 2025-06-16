// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Asta lipsea

const firebaseConfig = {
  apiKey: "AIzaSyD5bUvqIrwjngoLXVpNzog1_ancUMg9naE",
  authDomain: "e-commerce-shop-itc.firebaseapp.com",
  projectId: "e-commerce-shop-itc",
  storageBucket: "e-commerce-shop-itc.appspot.com",
  messagingSenderId: "738899843441",
  appId: "1:738899843441:web:85bfda1b89e2098ae2fed0",
  measurementId: "G-YT9ZKMW30S",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Asta este necesar pentru Firestore
