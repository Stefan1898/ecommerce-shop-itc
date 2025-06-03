import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import iphoneImg from "../assets/iphone14pro.jpg";
import asusImg from "../assets/laptop-asus.jpg";
import galaxyWatchImg from  "../assets/galaxy-watch5.jpg";

const imaginiProduse = [
  {
    src: iphoneImg,
    alt: "Produs 1"
  },
  {
    src: asusImg,
    alt: "Produs 2"
  },
  {
    src: galaxyWatchImg,
    alt: "Produs 3"
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
