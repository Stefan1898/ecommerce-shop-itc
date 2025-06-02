import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">E-Commerce Shop (IT/C)</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Produse</Link>
        <Link to="/cart">Coș</Link>
      </div>
    </nav>
  );
}

export default Navbar;
