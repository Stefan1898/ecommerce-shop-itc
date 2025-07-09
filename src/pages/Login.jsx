import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useTranslation } from "react-i18next";
import "./Auth.css";
import { User } from "lucide-react"; // pentru iconița de omuleț

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const { t } = useTranslation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser({ ...userData, uid: user.uid });
        navigate(userData.role === "admin" ? "/admin" : "/");
      } else {
        setError(t("error.userDataNotFound"));
      }
    } catch (err) {
      setError(t("error.login") + ": " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          fullName: user.displayName,
          email: user.email,
          address: "",
          phone: "",
          role: "user",
        });
      }

      setUser({ uid: user.uid, email: user.email });
      navigate("/");
    } catch (err) {
      setError("Google login failed: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2><User size={24} /> {t("login.title")}</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          name="email"
          placeholder={t("login.emailPlaceholder")}
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder={t("login.passwordPlaceholder")}
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <p className="auth-error">{error}</p>}
        <button type="submit">{t("login.submit")}</button>

        <button type="button" onClick={handleGoogleLogin} className="google-btn">
          🔐 {t("login.google") || "Autentificare cu Google"}
        </button>
      </form>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        {t("login.noAccount")} <Link to="/register">{t("login.registerNow")}</Link>
      </p>
    </div>
  );
}

export default Login;
