import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { CartContext } from "../CartContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Products() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const loaded = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(loaded);
      } catch (error) {
        console.error("Eroare la încărcarea produselor din Firestore:", error);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="products-container">
      <h2 className="section-title">📦 Produse disponibile</h2>
      <div className="product-grid">
        {products.map((produs) => (
          <div key={produs.id} className="product-card">
            <img src={produs.image} alt={produs.name} />
            <h3>{produs.name}</h3>
            <p className="price">{produs.price} RON</p>
            <button onClick={() => addToCart(produs)}>Adaugă în coș</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

