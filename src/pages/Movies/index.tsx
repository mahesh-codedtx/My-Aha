import React from "react";
import DetailPageTab from "../../components/DetailPageTabs";
import ImagescrollContainer from "../../components/ImageScrollContainer";
import { upcomingOnAha } from "../../utils/Home/UpcomingOnAha";
import { kids } from "../../utils/Home/kids";
import DetailPageBanner from "../../components/DetailPageHeroBanner";

const Movies = () => {
  return (
    <div>
      <DetailPageBanner />
      <DetailPageTab />
      <ImagescrollContainer movies={kids} className={"kids-class"} />
      <ImagescrollContainer
        movies={upcomingOnAha}
        className={"upcoming-aha-class"}
      />
    </div>
  );
};

export default Movies;
