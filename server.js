import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/proxy", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("Lipsește URL-ul imaginii!");
  }

  try {
    const response = await fetch(url);
    const buffer = await response.buffer();

    res.set("Content-Type", "image/jpeg");
    res.send(buffer);
  } catch (error) {
    console.error(error);
    res.status(500).send("Eroare la preluarea imaginii.");
  }
});

app.listen(PORT, () =>
  console.log(`Proxy server pornit pe http://localhost:${PORT}`)
);
