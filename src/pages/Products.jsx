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
        const loaded = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(loaded);
      } catch (error) {
        console.error("Eroare la încărcarea produselor din Firestore:", error);
      }
    };
    loadProducts();
  }, []);

  // Grupează produsele după categorie
  const groupedByCategory = products.reduce((acc, product) => {
    const category = product.category || "Fără categorie";
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="products-container">
      <h2 className="section-title">📦 Produse disponibile</h2>
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category} className="category-block">
          <h3 className="category-title">📁 {category}</h3>
          <div className="product-grid">
            {items.map((produs) => (
              <div key={produs.id} className="product-card">
                <img
                  src={
                    produs.image
                      ? produs.image
                      : "https://via.placeholder.com/250x200?text=Imagine+indisponibilă"
                  }
                  alt={produs.name || "Produs"}
                />
                <h3>{produs.name}</h3>
                <p className="price">
                  {produs.price ? `${produs.price} RON` : "Preț indisponibil"}
                </p>
                <button onClick={() => addToCart(produs)}>Adaugă în coș</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;