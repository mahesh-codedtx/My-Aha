import React from "react";
import "./index.css";
import ImagescrollContainer from "../../components/ImageScrollContainer";
import HeroCarousel from "../../components/HeroCarousel";
import { movies } from "../../utils/Home/movies";
import { kids } from "../../utils/Home/kids";
import { top10 } from "../../utils/Home/Top10";
import { actors } from "../../utils/Home/Actors";
import { upcomingOnAha } from "../../utils/Home/UpcomingOnAha";
import { genres } from "../../utils/Home/genres";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <ImagescrollContainer movies={movies} className={"sample-class"} />
      <ImagescrollContainer movies={kids} className={"kids-class"} />
      <ImagescrollContainer movies={top10} className={"top10-class"} />
      <ImagescrollContainer movies={actors} className={"actor-class"} />
      <ImagescrollContainer
        movies={upcomingOnAha}
        className={"upcoming-aha-class"}
      />
      <ImagescrollContainer movies={genres} className={"genres"} />
    </div>
  );
};

export default Home;
