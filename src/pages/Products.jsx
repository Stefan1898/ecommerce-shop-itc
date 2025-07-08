import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { CartContext } from "../CartContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useTranslation } from "react-i18next";

function Products() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
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
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const uniqueCategories = [
    "all",
    ...new Set(products.map((p) => p.category || t("noCategory"))),
  ];

  return (
    <div className="products-container">
      <h2 className="section-title">📦 {t("products")}</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="🔍 Caută produse..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

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
            <button onClick={() => addToCart(produs)}>{t("addToCart")}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
