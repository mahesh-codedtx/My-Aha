import React from "react";
import "./index.css";
const HorizontalListHeader = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <section>
      <div className="h-list-container">
        <div className="m-0">{sectionTitle}</div>
        <div className="cursor">See all</div>
      </div>
    </section>
  );
};

export default HorizontalListHeader;
