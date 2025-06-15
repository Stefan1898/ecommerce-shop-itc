// src/App.js
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import { CartProvider } from "./CartContext";
import { ThemeProvider } from "./ThemeContext";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage"; // ✅ Import pagină admin

// Emailul administratorului
const AdminEmail = "n_stefan18@yahoo.com";

// Rută protejată pentru admin
function AdminRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user?.email === AdminEmail ? children : <Navigate to="/" />;
}

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
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminPage />
                  </AdminRoute>
                }
              />
            </Routes>
          </Router>
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
