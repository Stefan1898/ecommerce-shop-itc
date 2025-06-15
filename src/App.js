// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import { ThemeProvider } from "./ThemeContext";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <h2 style={{ textAlign: "center" }}>
                    Bine ai venit la ITC Shop
                  </h2>
                }
              />
              <Route path="/produse" element={<Products />} />
              <Route path="/cos" element={<Cart />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
