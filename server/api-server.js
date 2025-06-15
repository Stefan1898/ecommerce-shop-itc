const express = require("express");
const path = require("path");
const products = require("./products");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/image", express.static(path.join(__dirname, "public/image")));

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`✅ Serverul rulează la http://localhost:${PORT}`);
});