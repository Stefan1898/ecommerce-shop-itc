import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Coșul tău de cumpărături</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Coșul este gol.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>{item.price} RON</span>
                <button onClick={() => removeFromCart(item.id)}>Șterge</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total:</strong> {total} RON
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
