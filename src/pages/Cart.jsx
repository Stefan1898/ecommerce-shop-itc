import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function Cart() {
  const { cartItems, addToCart, removeFromCart, decrementQuantity, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2>Coșul de cumpărături</h2>
      {cartItems.length === 0 ? (
        <p>Coșul este gol.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name} x {item.quantity}</p>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <button onClick={() => addToCart(item)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Șterge</button>
            </div>
          ))}
          <p>Total: {total} RON</p>
          <button onClick={clearCart}>Golește coșul</button>
        </>
      )}
    </div>
  );
}

export default Cart;