import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./CartContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
                Bine ai venit la ITC Shop
              </h1>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/register"
            element={
              <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
                Înregistrare
              </h2>
            }
          />
          <Route
            path="/login"
            element={
              <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
                Autentificare
              </h2>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
