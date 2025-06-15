// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: darkMode ? "#111827" : "#e0e7ff",
        color: darkMode ? "#fff" : "#111",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ fontWeight: "bold" }}>
          Acasă
        </Link>
        <Link to="/produse">Produse</Link>
        <Link to="/cos">Coș</Link>
        {!user && <Link to="/register">Înregistrare</Link>}
        {!user && <Link to="/login">Autentificare</Link>}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        {user && (
          <>
            <span style={{ fontWeight: "bold" }}>
              {user.email}
            </span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

