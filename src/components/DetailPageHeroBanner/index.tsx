import React from "react";
import "./index.css";
import AhaButton from "../MyButton";
const DetailPageBanner = () => {
  return (
    <section>
      <div
        style={{
          position: "relative",
          height: "92vh",
          minHeight: "600px",
          overflow: "hidden",
        }}
      >
        <div className="detail-page-hero-bg-gradient"></div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <img
            src="https://image-resizer-cloud-api.akamaized.net/image/9E9CE4B5-D19F-4EEE-B7C2-682BD8697C0B/0-16x9.jpg?width=2050&updatedTime=2025-03-29T11:30:12Z&dt=Web"
            style={{ width: "80%" }}
          />
        </div>
        <div className="detail-page-hero-content">
          <div className="detail-page-hero-content-certi">
            <div className="tag">
              <img src="https://www.aha.video/check_orange.16b3b99eea4a3354.svg" />
              Premium
            </div>
            <div className="tag">U/A</div>
            <div className="tag">16+</div>
          </div>
          <h1 className="detail-page-hero-content-title">Brahma-Anandam</h1>
          <div>
            <p className="detail-page-hero-content-length">
              2025 • 2h 28m • Drama • Comedy
            </p>
            <p className="detail-page-hero-content-length">Humorous</p>
          </div>
          <div style={{ minHeight: "20%", height: "auto" }}>
            <p className="detail-page-hero-content-desc">
              A 27-year-old Brahmanandam reluctantly takes his grandfather to
              their village, hoping to inherit his property. But what seemed
              like a final farewell turns into an unexpected journey filled with
              secrets, twists, and emotional revelations.
            </p>
          </div>
          <div className="detail-page-hero-play-subscribe-btn">
            <AhaButton
              btntext={"Play Trailer"}
              className={"play-trailer-button"}
              bgColor={"black"}
            />
            <AhaButton
              btntext={"Subscribe Now"}
              className={"detail-subscribe-button"}
              bgColor={"orange"}
            />
          </div>
          <div className="share-container">
            <div className="share-icon cursor">
              <img
                src="https://www.aha.video/share.4be7dd16d801843e.svg"
                width="20"
              />
            </div>
            <p className="share-text">Share</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPageBanner;
