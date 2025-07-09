import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
    <div className="auth-container">
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
          🔐 {t("register.submit")} cu Google
        </button>
      </form>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        {t("login.title")}? <Link to="/login">Autentifică-te</Link>
      </p>
    </div>
  );
}

export default Register;
