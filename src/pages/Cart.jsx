import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useTranslation } from "react-i18next";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { t } = useTranslation();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">{t("cart.title")}</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">{t("cart.empty")}</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>{item.price} RON</span>
                <button onClick={() => removeFromCart(item.id)}>
                  {t("cart.remove")}
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>{t("cart.total")}:</strong> {total} RON
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;