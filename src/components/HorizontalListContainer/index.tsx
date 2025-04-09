import React from "react";
import "./index.css";
const HorizontalListHeader = ({
  sectionTitle,
  containerLength,
}: {
  sectionTitle: string;
  containerLength: number;
}) => {
  return (
    <section>
      <div className="h-list-container">
        <div className="m-0">{sectionTitle}</div>
        <div className="cursor">{containerLength >= 20 ? "See all" : ""}</div>
      </div>
    </section>
  );
};

export default HorizontalListHeader;
