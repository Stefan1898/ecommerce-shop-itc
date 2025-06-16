// src/pages/AdminPage.jsx
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const productsRef = collection(db, "products");

  const loadProducts = async () => {
    const snapshot = await getDocs(productsRef);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    try {
      await addDoc(productsRef, {
        name: newProduct.name,
        price: Number(newProduct.price),
        category: newProduct.category,
        image: newProduct.image,
      });
      setNewProduct({ name: "", price: "", category: "", image: "" });
      loadProducts();
    } catch (error) {
      console.error("Eroare la adăugarea produsului:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      loadProducts();
    } catch (error) {
      console.error("Eroare la ștergerea produsului:", error);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ marginBottom: "16px" }}>🔧 Panou Administrator</h2>

      <div style={{ marginBottom: "32px" }}>
        <h3>Adaugă produs nou:</h3>
        <input
          type="text"
          name="name"
          placeholder="Nume"
          value={newProduct.name}
          onChange={handleChange}
          style={{ marginRight: "8px" }}
        />
        <input
          type="number"
          name="price"
          placeholder="Preț"
          value={newProduct.price}
          onChange={handleChange}
          style={{ marginRight: "8px" }}
        />
        <input
          type="text"
          name="category"
          placeholder="Categorie"
          value={newProduct.category}
          onChange={handleChange}
          style={{ marginRight: "8px" }}
        />
        <input
          type="text"
          name="image"
          placeholder="URL imagine"
          value={newProduct.image}
          onChange={handleChange}
          style={{ marginRight: "8px" }}
        />
        <button onClick={handleAddProduct}>Adaugă</button>
      </div>

      <h3>📦 Lista produse:</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: "8px" }}>
            {p.name} – {p.price} RON – {p.category}{" "}
            <button
              onClick={() => handleDelete(p.id)}
              style={{ marginLeft: "10px" }}
            >
              Șterge
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
