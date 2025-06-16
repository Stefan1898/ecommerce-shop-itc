// src/components/Carousel.jsx
import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  {
    url: "https://via.placeholder.com/1200x400?text=Reduceri+Laptopuri",
    alt: "Reduceri Laptopuri"
  },
  {
    url: "https://via.placeholder.com/1200x400?text=Telefoane+Smart",
    alt: "Telefoane Smart"
  },
  {
    url: "https://via.placeholder.com/1200x400?text=Gadgeturi+Noi",
    alt: "Gadgeturi Noi"
  }
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[current].url} alt={images[current].alt} />
    </div>
  );
}

export default Carousel;
