import "./index.css";

import { GrNext, GrPrevious } from "react-icons/gr";
import JumpCard from "../JumpingCard";
import { useEffect, useRef, useState } from "react";
import HorizontalListHeader from "../HorizontalListContainer";
import { IMoviesSection } from "../../utils/Home/movies";
const ImagescrollContainer = ({
  movies,
  className,
}: {
  movies: any;
  className: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", checkScrollPosition);
    }
    checkScrollPosition();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  //API DATA
  // console.log(movies.cd[0]);

  return (
    <section>
      <HorizontalListHeader sectionTitle={movies.lon[0].n} />
      <div className="image-scroll-container" style={{ padding: "0" }}>
        <div
          className="icon-position prev"
          style={{ visibility: isAtStart ? "hidden" : "visible" }}
        >
          <GrPrevious size={30} onClick={handlePrev} className="cursor" />
        </div>
        <div
          ref={containerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
          }}
          className="image-scroll-container"
        >
          {movies.cd.map((movie: any, index: any) => {
            return (
              <div className={`image-scroll-container-img ${className}`}>
                <JumpCard
                  movie={movie}
                  isRoundedImage={movies.isRoundedImage}
                />
              </div>
            );
          })}
        </div>
        <div
          className="icon-position next"
          style={{ visibility: isAtEnd ? "hidden" : "visible" }}
        >
          <GrNext size={30} onClick={handleNext} className="cursor" />
        </div>
      </div>
    </section>
  );
};

export default ImagescrollContainer;
