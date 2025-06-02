import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Afișează componenta Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
