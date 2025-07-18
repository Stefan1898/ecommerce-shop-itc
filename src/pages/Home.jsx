// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useTranslation } from "react-i18next";

function Home() {
  const [carouselItems, setCarouselItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const all = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const featured = all.slice(0, 5); // primele 5 produse
        setCarouselItems(featured);
      } catch (error) {
        console.error("Eroare la încărcarea produselor pentru carusel:", error);
      }
    };

    loadFeaturedProducts();
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">🎉 {t("homepage.welcomeMessage")}</h2>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        className="carousel"
      >
        {carouselItems.map((produs) => (
          <div key={produs.id}>
            <img src={produs.image} alt={produs.name} />
            <p className="legend">{produs.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
