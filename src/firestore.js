// src/firestore.js
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebaseConfig"; // importă aplicația configurată

const db = getFirestore(app);

export const fetchProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};
