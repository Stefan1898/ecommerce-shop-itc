import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../firebaseConfig";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
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

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: form.email,
        fullName: form.fullName,
        address: form.address,
        phone: form.phone,
        role: "user"
      });

      navigate("/login");
    } catch (err) {
      setError(t("error.register") + ": " + err.message);
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
      </form>
    </div>
  );
}

export default Register;