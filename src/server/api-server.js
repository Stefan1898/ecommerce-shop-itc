// api-server.js

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// ✅ Lista de produse
const products = [
  {
    id: 1,
    name: "Laptop Lenovo IdeaPad",
    price: 3499,
    category: "Laptop",
    image: "https://via.placeholder.com/300x200?text=Lenovo+IdeaPad",
  },
  {
    id: 2,
    name: "Laptop ASUS ROG",
    price: 6299,
    category: "Laptop",
    image: "https://via.placeholder.com/300x200?text=ASUS+ROG",
  },
  {
    id: 3,
    name: "iPhone 14 Pro",
    price: 6999,
    category: "Smartphone",
    image: "https://via.placeholder.com/300x200?text=iPhone+14+Pro",
  },
  {
    id: 4,
    name: "Samsung Galaxy S25",
    price: 5999,
    category: "Smartphone",
    image: "https://via.placeholder.com/300x200?text=Galaxy+S25",
  },
  {
    id: 5,
    name: "Placă video NVIDIA RTX 4060",
    price: 2399,
    category: "Placi",
    image: "https://via.placeholder.com/300x200?text=RTX+4060",
  },
  {
    id: 6,
    name: "Placă de bază MSI B550",
    price: 899,
    category: "Placi",
    image: "https://via.placeholder.com/300x200?text=MSI+B550",
  },
  {
    id: 7,
    name: "PC Office Intel i5",
    price: 2199,
    category: "PC",
    image: "https://via.placeholder.com/300x200?text=PC+Office+Intel",
  },
  {
    id: 8,
    name: "Unitate Gaming Ryzen 7",
    price: 4999,
    category: "PC",
    image: "https://via.placeholder.com/300x200?text=Gaming+Ryzen+7",
  },
  {
    id: 9,
    name: "Samsung Galaxy Watch 5",
    price: 1299,
    category: "Smartwatch",
    image: "https://via.placeholder.com/300x200?text=Galaxy+Watch+5",
  },
  {
    id: 10,
    name: "Apple Watch SE",
    price: 1499,
    category: "Smartwatch",
    image: "https://via.placeholder.com/300x200?text=Apple+Watch+SE",
  },
];

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Rute
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ✅ Pornire server
app.listen(PORT, () => {
  console.log(`✅ Serverul rulează la http://localhost:${PORT}`);
});
