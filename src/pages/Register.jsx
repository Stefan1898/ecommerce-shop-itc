import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return setError("Parolele nu coincid.");
    }

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      // Poți salva fullName, address, phone în Firestore aici dacă vrei.
      navigate("/login");
    } catch (err) {
      setError("Eroare la înregistrare: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Înregistrare</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="fullName"
          placeholder="Nume complet"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Adresă"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefon (opțional)"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Parolă"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmă parola"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        {error && <p className="auth-error">{error}</p>}
        <button type="submit">Creează cont</button>
      </form>
    </div>
  );
}

export default Register;
