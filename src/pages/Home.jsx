import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imaginiProduse = [
  {
    src: "https://via.placeholder.com/800x400/111111/ffffff?text=iPhone+14+Pro",
    alt: "iPhone 14 Pro"
  },
  {
    src: "https://via.placeholder.com/800x400/222222/ffffff?text=ASUS+ROG+Laptop",
    alt: "Laptop ASUS ROG"
  },
  {
    src: "https://via.placeholder.com/800x400/333333/ffffff?text=Galaxy+Watch+5",
    alt: "Samsung Galaxy Watch 5"
  }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="home-container">
      <h2>Pagina principală - Home</h2>
      <p>
        Bine ai venit în magazinul nostru online IT/C! Descoperă produsele de top și adaugă-le în coșul tău virtual.
      </p>

      <div className="home-slider-container">
        <Slider {...settings}>
          {imaginiProduse.map((img, index) => (
            <div key={index}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
