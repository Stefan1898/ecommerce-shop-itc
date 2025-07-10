// src/components/Carousel.jsx
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./Carousel.css";

function Carousel() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const products = snapshot.docs
          .map(doc => doc.data())
          .filter(p => p.image)
          .slice(0, 6)
          .map(p => ({
            url: p.image,
            alt: p.name || "Produs"
          }));

        setImages(products);
      } catch (error) {
        console.error("Eroare la încărcarea imaginilor din produse:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 300);
    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div className="carousel" style={{ position: "relative" }}>
      <img src={images[current].url} alt={images[current].alt} />
      <div className="carousel-caption">{images[current].alt}</div>
    </div>
  );
}

export default Carousel;
