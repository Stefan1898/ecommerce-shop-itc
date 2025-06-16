import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useTranslation } from "react-i18next";
import "./Auth.css";

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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser({ ...userData, uid: user.uid });

        if (userData.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setError(t("error.userDataNotFound"));
      }
    } catch (err) {
      setError(t("error.login") + ": " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{t("login.title")}</h2>
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
      </form>
    </div>
  );
}

export default Login;