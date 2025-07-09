import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  ro: {
    translation: {
      welcome: "Bine ai venit la IT&C Shop",
      products: "Produse disponibile",
      addToCart: "Adaugă în coș",
      noPrice: "Preț indisponibil",
      noCategory: "Fără categorie",
      searchPlaceholder: "Caută produse...",
      selectCategory: "Toate categoriile",
      categories: {
        all: "Toate categoriile",
        Placi: "Placi",
        "Unitate PC": "Unitate PC",
        Laptop: "Laptop",
        Monitor: "Monitor",
        Telefon: "Telefon",
        Smartwatch: "Smartwatch",
        Tableta: "Tableta",
      },
      login: {
        title: "Autentificare",
        emailPlaceholder: "ex: email@exemplu.com",
        passwordPlaceholder: "Introdu parola",
        submit: "Autentifică-te",
        google: "Autentificare cu Google",
        noAccount: "Nu ai cont?",
        registerNow: "Înregistrează-te acum",
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
        google: "Înregistrare cu Google",
      },
      cart: {
        title: "Coșul tău de cumpărături",
        empty: "Coșul este gol.",
        remove: "Șterge",
        total: "Total",
        paymentMethod: "Metoda de plată",
        checkout: "Finalizare comandă",
      },
      error: {
        passwordsDontMatch: "Parolele nu coincid.",
        register: "Eroare la înregistrare",
        login: "Autentificare eșuată",
        userDataNotFound:
          "Datele utilizatorului nu au fost găsite în Firestore",
      },
      homepage: {
        welcomeMessage: "🎉 Bine ai venit la IT&C Shop!",
      },
    },
  },
  en: {
    translation: {
      welcome: "Welcome to IT&C Shop",
      products: "Available Products",
      addToCart: "Add to cart",
      noPrice: "Price not available",
      noCategory: "Uncategorized",
      searchPlaceholder: "Search products...",
      selectCategory: "All categories",
      categories: {
        all: "All categories",
        Placi: "Motherboards",
        "Unitate PC": "PC Unit",
        Laptop: "Laptop",
        Monitor: "Monitor",
        Telefon: "Phone",
        Smartwatch: "Smartwatch",
        Tableta: "Tablet",
      },
      login: {
        title: "Login",
        emailPlaceholder: "e.g. email@example.com",
        passwordPlaceholder: "Enter password",
        submit: "Login",
        google: "Login with Google",
        noAccount: "Don't have an account?",
        registerNow: "Register now",
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
        google: "Sign up with Google",
      },
      cart: {
        title: "Your Shopping Cart",
        empty: "Your cart is empty.",
        remove: "Remove",
        total: "Total",
        paymentMethod: "Payment method",
        checkout: "Checkout",
      },
      error: {
        passwordsDontMatch: "Passwords do not match.",
        register: "Registration error",
        login: "Login failed",
        userDataNotFound: "User data not found in Firestore",
      },
      homepage: {
        welcomeMessage: "🎉 Welcome to IT&C Shop!",
      },
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue chez IT&C Shop",
      products: "Produits disponibles",
      addToCart: "Ajouter au panier",
      noPrice: "Prix non disponible",
      noCategory: "Sans catégorie",
      searchPlaceholder: "Rechercher des produits...",
      selectCategory: "Toutes les catégories",
      categories: {
        all: "Toutes les catégories",
        Placi: "Cartes mères",
        "Unitate PC": "Unité centrale",
        Laptop: "Ordinateur portable",
        Monitor: "Moniteur",
        Telefon: "Téléphone",
        Smartwatch: "Montre connectée",
        Tableta: "Tablette",
      },
      login: {
        title: "Connexion",
        emailPlaceholder: "ex : email@exemple.com",
        passwordPlaceholder: "Entrez le mot de passe",
        submit: "Se connecter",
        google: "Connexion avec Google",
        noAccount: "Vous n'avez pas de compte ?",
        registerNow: "Inscrivez-vous maintenant",
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
        google: "Inscription avec Google",
      },
      cart: {
        title: "Votre panier",
        empty: "Le panier est vide.",
        remove: "Supprimer",
        total: "Total",
        paymentMethod: "Méthode de paiement",
        checkout: "Passer la commande",
      },
      error: {
        passwordsDontMatch: "Les mots de passe ne correspondent pas.",
        register: "Erreur d'inscription",
        login: "Échec de la connexion",
        userDataNotFound: "Données utilisateur introuvables dans Firestore",
      },
      homepage: {
        welcomeMessage: "🎉 Bienvenue chez IT&C Shop!",
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
