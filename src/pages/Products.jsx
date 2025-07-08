import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { CartContext } from "../CartContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useTranslation } from "react-i18next";

function Products({ searchTerm, selectedCategory }) {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

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

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-container">
      <h2 className="section-title">📦 {t("products")}</h2>
      <div className="product-grid">
        {filteredProducts.map((produs) => (
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
              {produs.price ? `${produs.price} RON` : t("noPrice")}
            </p>
            <button onClick={() => addToCart(produs)}>
              {t("addToCart")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
