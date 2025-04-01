import React, { useEffect, useState } from "react";
import "./index.css";
import { heroCarousel } from "../../utils/Home/HeroCarousel";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalLength = heroCarousel.length;
  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalLength) % totalLength);
  };
  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalLength);
  };

  //  Auto-play effect (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, [activeIndex]);
  const getVisibleThumbnails = () => {
    if (totalLength <= 3) return heroCarousel;
    const centerIndex = activeIndex;
    const left = (centerIndex - 1 + totalLength) % totalLength;
    const right = (centerIndex + 1) % totalLength;
    return [heroCarousel[left], heroCarousel[centerIndex], heroCarousel[right]];
  };
  return (
    <section style={{ minHeight: "500px", height: "92vh", overflow: "hidden" }}>
      <div className="hero-carousel-container cursor">
        <div className="hero-image-container">
          <img
            src={heroCarousel[activeIndex].heroBgImage}
            width="80%"
            className="hero-image"
          />
        </div>
        <div className="hero-content-container">
          <div
            style={{
              width: "700px",
              maxWidth: "50%",
              padding: "1rem 3rem",
            }}
          >
            <h1 style={{ fontSize: "2.4rem", margin: "0" }}>
              {heroCarousel[activeIndex].heroMovieTitle}
            </h1>
            <p className="hero-carousel-movie-length">
              {heroCarousel[activeIndex].heroMovieLength}
              <span>• U/A 16+</span>
            </p>
            <p className="hero-carousel-desc">
              {heroCarousel[activeIndex].heroMovieDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="hero-thumb-container-main">
        <button className="prev-thumb-btn" onClick={prevCard}>
          <GrFormPrevious size={20} />
        </button>
        <ul className="hero-thumb-list-main">
          {getVisibleThumbnails().map((thumb, index) => {
            return (
              <li key={index}>
                <img
                  src={thumb.thumbnailImg}
                  alt="Carousel"
                  className={`thumbnailImg ${
                    heroCarousel.indexOf(thumb) === activeIndex ? "active" : ""
                  }`}
                />
              </li>
            );
          })}
        </ul>
        <button className="next-thumb-btn" onClick={nextCard}>
          <GrFormNext size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
