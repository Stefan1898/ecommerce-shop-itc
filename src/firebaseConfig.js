// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "NUME_PROIECT.firebaseapp.com",
  projectId: "NUME_PROIECT",
  storageBucket: "NUME_PROIECT.appspot.com",
  messagingSenderId: "ID",
  appId: "APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
