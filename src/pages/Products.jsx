import React, { useContext, useEffect, useState } from 'react';
import './Products.css';
import { CartContext } from '../CartContext';
import { fetchProducts } from '../firestore'; // 🔥 Importă funcția din firestore.js

function renderCategorySection(title, category, products, addToCart) {
  const filtered = products.filter(p => p.category === category);

  return (
    <div key={category} className="mb-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((produs) => (
          <div
            key={produs.id}
            className="border rounded shadow p-4 bg-white hover:shadow-lg transition"
          >
            <img
              src={produs.image}
              alt={produs.name}
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{produs.name}</h3>
            <p className="text-green-600 font-bold">{produs.price} RON</p>
            <button
              onClick={() => addToCart(produs)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Adaugă în coș
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Products() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    load();
  }, []);

  return (
    <div className="p-6">
      {renderCategorySection("💻 Laptopuri", "Laptop", products, addToCart)}
      {renderCategorySection("🖥️ PC-uri și Unități", "PC", products, addToCart)}
      {renderCategorySection("🔧 Plăci de calculator", "Placi", products, addToCart)}
      {renderCategorySection("📱 Smartphone-uri", "Smartphone", products, addToCart)}
      {renderCategorySection("⌚ Smartwatch-uri", "Smartwatch", products, addToCart)}
    </div>
  );
}

export default Products;


