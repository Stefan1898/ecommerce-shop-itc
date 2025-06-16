import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  ro: {
    translation: {
      welcome: "Bine ai venit la IT&C Shop",
      products: "Produse disponibile",
      login: {
        title: "Autentificare",
        emailPlaceholder: "ex: email@exemplu.com",
        passwordPlaceholder: "Introdu parola",
        submit: "Autentifică-te",
      },
      register: {
        title: "Înregistrare",
        fullName: "Nume complet",
        address: "Adresă",
        phone: "Telefon (opțional)",
        email: "Email",
        password: "Parolă",
        confirmPassword: "Confirmă parola",
        submit: "Creează cont",
      },
      cart: {
        title: "Coșul tău de cumpărături",
        empty: "Coșul este gol.",
        remove: "Șterge",
        total: "Total",
      },
      error: {
        passwordsDontMatch: "Parolele nu coincid.",
        register: "Eroare la înregistrare",
        login: "Autentificare eșuată",
        userDataNotFound:
          "Datele utilizatorului nu au fost găsite în Firestore",
      },
    },
  },
  en: {
    translation: {
      welcome: "Welcome to IT&C Shop",
      products: "Available Products",
      login: {
        title: "Login",
        emailPlaceholder: "e.g. email@example.com",
        passwordPlaceholder: "Enter password",
        submit: "Login",
      },
      register: {
        title: "Register",
        fullName: "Full Name",
        address: "Address",
        phone: "Phone (optional)",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        submit: "Create account",
      },
      cart: {
        title: "Your Shopping Cart",
        empty: "Your cart is empty.",
        remove: "Remove",
        total: "Total",
      },
      error: {
        passwordsDontMatch: "Passwords do not match.",
        register: "Registration error",
        login: "Login failed",
        userDataNotFound: "User data not found in Firestore",
      },
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue chez IT&C Shop",
      products: "Produits disponibles",
      login: {
        title: "Connexion",
        emailPlaceholder: "ex : email@exemple.com",
        passwordPlaceholder: "Entrez le mot de passe",
        submit: "Se connecter",
      },
      register: {
        title: "Inscription",
        fullName: "Nom complet",
        address: "Adresse",
        phone: "Téléphone (optionnel)",
        email: "Email",
        password: "Mot de passe",
        confirmPassword: "Confirmer le mot de passe",
        submit: "Créer un compte",
      },
      cart: {
        title: "Votre panier",
        empty: "Le panier est vide.",
        remove: "Supprimer",
        total: "Total",
      },
      error: {
        passwordsDontMatch: "Les mots de passe ne correspondent pas.",
        register: "Erreur d'inscription",
        login: "Échec de la connexion",
        userDataNotFound: "Données utilisateur introuvables dans Firestore",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ro",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
