import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Coșul tău de cumpărături</h2>
      {cartItems.length === 0 ? (
        <p>Coșul este gol.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} RON
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Șterge
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: {total} RON</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
