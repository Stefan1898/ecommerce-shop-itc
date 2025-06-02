import React from "react";
import "./Home.css"; // ✅ importă fișierul CSS

function Home() {
  return (
    <div className="home-container">
      <h2>Pagina principală - Home</h2>
      <p>Bine ai venit în magazinul nostru online IT/C! Descoperă produsele de top și adaugă-le în coșul tău virtual.</p>
      <button>Vezi Produsele</button>
    </div>
  );
}

export default Home;
