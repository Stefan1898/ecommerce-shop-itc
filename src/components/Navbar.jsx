// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">ITC Shop</Link>
        </div>
        <div className="space-x-4 text-sm md:text-base">
          <Link to="/" className="hover:underline">Acasă</Link>
          <Link to="/products" className="hover:underline">Produse</Link>
          <Link to="/cart" className="hover:underline">Coș</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
