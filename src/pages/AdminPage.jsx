// src/pages/AdminPage.jsx
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../fetchProducts";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    const updated = [...products, { ...newProduct, id: Date.now() }];
    setProducts(updated);
    setNewProduct({ name: "", price: "", category: "", image: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
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
