import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { fetchProducts } from "../fetchProducts";

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
      <h2>Produse</h2>
      <div>
        {products.map((produs) => (
          <div key={produs.id}>
            <img src={produs.image} alt={produs.name} width="100" />
            <p>{produs.name}</p>
            <p>{produs.price} RON</p>
            <button onClick={() => addToCart(produs)}>Adaugă în coș</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;