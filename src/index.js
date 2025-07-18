import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./CartContext";
import "./index.css";
import "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
