import React, { useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext"; // ⬅️ Adăugat
import "./Auth.css";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext); // ⬅️ Obținem darkMode

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      return setError(t("error.passwordsDontMatch"));
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: form.email,
        fullName: form.fullName,
        address: form.address,
        phone: form.phone,
        role: "user",
      });

      navigate("/login");
    } catch (err) {
      setError(t("error.register") + ": " + err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        fullName: user.displayName || "",
        address: "",
        phone: "",
        role: "user",
      });

      navigate("/");
    } catch (err) {
      setError("Google sign-in failed: " + err.message);
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundColor: darkMode ? "#1e293b" : "#f7f9fc",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2>{t("register.title")}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="fullName"
          placeholder={t("register.fullName")}
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder={t("register.address")}
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder={t("register.phone")}
          value={form.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder={t("register.email")}
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder={t("register.password")}
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder={t("register.confirmPassword")}
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        {error && <p className="auth-error">{error}</p>}

        <button type="submit">{t("register.submit")}</button>

        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleSignUp}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google icon"
            style={{ width: "20px", marginRight: "8px" }}
          />
          {t("register.google")}
        </button>
      </form>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        {t("register.haveAccount")}{" "}
        <Link to="/login" style={{ color: "#007bff", textDecoration: "underline" }}>
          {t("login.title")}
        </Link>
      </p>
    </div>
  );
}

export default Register;
