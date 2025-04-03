import React, { useEffect, useState } from "react";
import "./index.css";
import { heroCarousel, IHeroCarousel } from "../../utils/Home/HeroCarousel";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { constructImageUrl } from "../ImageResizer/imageResizer";

const HeroCarousel = ({ heroCarousel }: { heroCarousel: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalLength = heroCarousel.cd.length;
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
    return [
      heroCarousel.cd[left],
      heroCarousel.cd[centerIndex],
      heroCarousel.cd[right],
    ];
  };
  console.log(heroCarousel.cd[activeIndex]);
  return (
    <section
      style={{
        minHeight: "520px",
        height: "92vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="hero-carousel-container cursor">
        <div className="hero-image-container">
          <img
            src={constructImageUrl(
              `${heroCarousel.cd[activeIndex].id}`,
              heroCarousel.cd[activeIndex].ia[3],
              1250,
              `${heroCarousel.cd[activeIndex].ut}`
            )}
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
              {heroCarousel.cd[activeIndex].lon[0].n}
            </h1>
            <p className="hero-carousel-movie-length">
              {heroCarousel.cd[activeIndex].rt}
              <span>• U/A 16+</span>
            </p>
            <p className="hero-carousel-desc">
              {heroCarousel.cd[activeIndex].lod[0].n}
            </p>
          </div>
        </div>
      </div>

      <div className="hero-thumb-container-main">
        <button className="prev-thumb-btn" onClick={prevCard}>
          <GrFormPrevious size={20} />
        </button>
        <ul className="hero-thumb-list-main">
          {getVisibleThumbnails().map((thumb: any, index: any) => {
            return (
              <li key={index}>
                <img
                  src={constructImageUrl(
                    `${thumb.id}`,
                    thumb.ia[3],
                    160,
                    `${thumb.ut}`
                  )}
                  alt="Carousel"
                  className={`thumbnailImg ${
                    heroCarousel.cd.indexOf(thumb) === activeIndex
                      ? "active"
                      : ""
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
