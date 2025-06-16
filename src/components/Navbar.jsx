// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { ThemeContext } from "../ThemeContext";
import { useTranslation } from "react-i18next";

const AdminEmail = "n_stefan18@yahoo.com";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
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
          {t("welcome")}
        </Link>
        <Link to="/produse">{t("products")}</Link>
        <Link to="/cos">Coș</Link>
        {!user && <Link to="/register">{t("register")}</Link>}
        {!user && <Link to="/login">{t("login")}</Link>}
        {user?.email === AdminEmail && <Link to="/admin">Admin</Link>}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <select onChange={changeLanguage} value={i18n.language}>
          <option value="ro">RO</option>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        {user && (
          <>
            <span style={{ fontWeight: "bold" }}>{user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;