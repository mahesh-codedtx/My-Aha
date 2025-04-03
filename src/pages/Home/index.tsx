import React, { useEffect, useState } from "react";
import "./index.css";
import ImagescrollContainer from "../../components/ImageScrollContainer";
import HeroCarousel from "../../components/HeroCarousel";
import { movies } from "../../utils/Home/movies";
import { kids } from "../../utils/Home/kids";
import { top10 } from "../../utils/Home/Top10";
import { actors } from "../../utils/Home/Actors";
import { upcomingOnAha } from "../../utils/Home/UpcomingOnAha";
import { genres } from "../../utils/Home/genres";
import { heroCarousel } from "../../utils/Home/HeroCarousel";
import { useLandingScreenData } from "../../hooks/useLandingScreenData";

const Home = () => {
  const { data, loading, error } = useLandingScreenData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No data available</p>;

  function containerData(containerNum: number) {
    return data.t[0].c[containerNum];
  }

  return (
    <div>
      <HeroCarousel heroCarousel={containerData(0)} />

      <ImagescrollContainer
        movies={containerData(1)}
        className={"sample-class"}
      />
      <ImagescrollContainer movies={containerData(2)} className={""} />
      <ImagescrollContainer movies={containerData(3)} className={""} />
      <ImagescrollContainer
        movies={containerData(4)}
        className={"sample-class"}
      />

      {/* <ImagescrollContainer movies={kids} className={"kids-class"} />
      <ImagescrollContainer movies={top10} className={"top10-class"} />
      <ImagescrollContainer movies={actors} className={"actor-class"} />
      <ImagescrollContainer
        movies={upcomingOnAha}
        className={"upcoming-aha-class"}
      />
      <ImagescrollContainer movies={genres} className={"genres"} /> */}
    </div>
  );
};

export default Home;
