// src/pages/Home.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css"; // stiluri opționale

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">🎉 Bine ai venit la IT&C Shop!</h2>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        className="carousel"
      >
        <div>
          <img src="https://source.unsplash.com/featured/?laptop" alt="Laptop" />
          <p className="legend">Laptopuri performante</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/featured/?smartphone" alt="Smartphone" />
          <p className="legend">Smartphone-uri de top</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/featured/?headphones" alt="Căști" />
          <p className="legend">Accesorii moderne</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
