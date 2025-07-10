import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { ThemeContext } from "../ThemeContext";
import { useTranslation } from "react-i18next";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { ShoppingCart, User, Home, Box } from "lucide-react";

const AdminEmail = "n_stefan18@yahoo.com";

function Navbar({ onSearch, onCategoryChange }) {
  const { user, logout } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const unique = [
        ...new Set(snapshot.docs.map((doc) => doc.data().category || "uncategorized")),
      ];
      setCategories(unique);
    };
    loadCategories();
  }, []);

  useEffect(() => {
    onSearch?.(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    onCategoryChange?.(selectedCategory);
  }, [selectedCategory]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isProductPage = location.pathname.includes("produse");

  const getTranslatedCategory = (cat) => {
    const normalized = cat.toLowerCase();

    switch (normalized) {
      case "all":
        return t("selectCategory");
      case "uncategorized":
        return t("noCategory");
      case "placi":
        return t("categories.Placi");
      case "unitate pc":
        return t("categories.Unitate PC");
      case "laptop":
        return t("categories.Laptop");
      case "monitor":
        return t("categories.Monitor");
      case "telefon":
        return t("categories.Telefon");
      case "smartwatch":
        return t("categories.Smartwatch");
      case "tableta":
        return t("categories.Tableta");
      default:
        return cat;
    }
  };

  return (
    <nav
      style={{
        backgroundColor: darkMode ? "#111827" : "#e0e7ff",
        color: darkMode ? "#fff" : "#111",
        padding: "12px 24px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
        <Link to="/" style={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
          <Home size={18} /> {t("home")}
        </Link>
        <Link to="/produse" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Box size={18} /> {t("products")}
        </Link>
        <Link to="/cos" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <ShoppingCart size={18} /> {t("cart.short")}
        </Link>
        {!user && (
          <Link to="/login" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <User size={18} /> {t("login.title")}
          </Link>
        )}
        {user?.email === AdminEmail && <Link to="/admin">Admin</Link>}
      </div>

      {isProductPage && (
        <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "6px", borderRadius: "6px" }}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ padding: "6px", borderRadius: "6px" }}
          >
            <option value="all">{t("selectCategory")}</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {getTranslatedCategory(cat)}
              </option>
            ))}
          </select>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
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
            <button onClick={handleLogout}>{t("logout")}</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
