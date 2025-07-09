import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { useTranslation } from "react-i18next";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, addToCart, decrementQuantity } = useContext(CartContext);
  const { t } = useTranslation();

  const [paymentMethod, setPaymentMethod] = useState("card");

  const groupedItems = cartItems.reduce((acc, item) => {
    const category = item.category || "Fără categorie";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert(
      `Comanda a fost plasată cu metoda de plată: ${paymentMethod.toUpperCase()}.\nTotal: ${total} RON`
    );
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">{t("cart.title")}</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">{t("cart.empty")}</p>
      ) : (
        <>
          <div className="cart-grouped">
            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category}>
                <h3>{category}</h3>
                <ul className="cart-list">
                  {items.map((item, index) => (
                    <li key={index} className="cart-item">
                      <span>{item.name}</span>
                      <span>{item.price} RON</span>
                      <div className="quantity-controls">
                        <button onClick={() => decrementQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)}>
                        {t("cart.remove")}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <strong>{t("cart.total")}:</strong> {total} RON
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="payment">{t("cart.paymentMethod")}: </label>
            <select
              id="payment"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ padding: "6px", marginLeft: "8px" }}
            >
              <option value="card">Card (VISA / Mastercard)</option>
              <option value="cash">Ramburs la curier</option>
            </select>
          </div>

          <button
            style={{
              marginTop: "1.5rem",
              padding: "0.8rem 1.2rem",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={handleCheckout}
          >
            {t("cart.checkout")}
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
