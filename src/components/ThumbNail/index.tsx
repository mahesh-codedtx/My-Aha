import "./index.css";
import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { thumbArr } from "../../utils/Home/thumbnail";

const ThumbNail = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalLength = thumbArr.length;
  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalLength) % totalLength);
  };
  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalLength);
  };
  const getVisibleThumbnails = () => {
    if (totalLength <= 3) return thumbArr;
    const centerIndex = activeIndex;
    const left = (centerIndex - 1 + totalLength) % totalLength;
    const right = (centerIndex + 1) % totalLength;
    return [thumbArr[left], thumbArr[centerIndex], thumbArr[right]];
  };
  return (
    <section>
      <div className="hero-thumb-container">
        <button className="hero-thumb-arrow" onClick={prevCard}>
          <GrFormPrevious />
        </button>
        <ul className="hero-thumb-list">
          {getVisibleThumbnails().map((thumb, index) => {
            return (
              <li key={index}>
                <img
                  src={thumb.img}
                  className={`thumbnail ${
                    thumbArr.indexOf(thumb) === activeIndex ? "active" : ""
                  }`}
                />
              </li>
            );
          })}
        </ul>
        <button className="hero-thumb-arrow" onClick={nextCard}>
          <GrFormNext />
        </button>
      </div>
    </section>
  );
};

export default ThumbNail;
