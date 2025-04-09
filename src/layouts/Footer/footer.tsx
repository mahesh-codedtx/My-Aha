import React from "react";
import "./footer.css";
import { footerContent } from "../../utils/footer";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{ padding: "34px 0 24px", fontFamily: "Proxima Nova, sans-serif" }}
    >
      <div>
        <div className="flex footer-content">
          <div className="footer-left-social">
            <img
              src="https://www.aha.video/aha-gray-logo.29a310bfcc08d0e8.svg"
              className="footer-aha cursor"
              onClick={() => {
                navigate("/");
              }}
            />
            <div>
              <p className="footer-left-social-text">Connect with us</p>
              <div style={{ display: "flex", gap: "15px" }}>
                <img
                  src="https://www.aha.video/assets/images/social/instagram-footer.png"
                  width={32}
                  className="cursor"
                />
                <img
                  src="https://www.aha.video/assets/images/social/facebook-footer.svg"
                  width={32}
                  className="cursor"
                />
                <img
                  src="https://www.aha.video/assets/images/social/twitter-footer.svg"
                  width={32}
                  className="cursor"
                />
              </div>
            </div>
            <div>
              <p className="footer-left-social-text">Download aha mobile app</p>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <img
                  src="https://www.aha.video/assets/images/social/google_play_mobile.svg"
                  width={125}
                  className="cursor"
                />
                <img
                  src="https://www.aha.video/assets/images/social/app_store_mobile.svg"
                  width={125}
                  className="cursor"
                />
              </div>
            </div>
            <div className="footer-left-social-text">
              <p>
                Contact us:{" "}
                <a className="aha-support-link cursor">support@aha.video</a>
              </p>
            </div>
          </div>
          {footerContent.map((footer) => {
            return (
              <div className="movie-container-single-set">
                <p className="footer-movie-container-title">{footer.title}</p>
                {footer.movies.map((movie) => {
                  return (
                    <p className="footer-movie-movie-list cursor">{movie}</p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex footer-copyright-section">
        <div className="copyright-text">
          © Copyright 2025 Arha Media and Broadcasting Pvt Ltd. All rights
          reserved.
        </div>
        <div className="flex cursor">
          <p className="m-0 color-grey copyright-power-text">Powered by</p>
          <img
            src="https://www.aha.video/assets/images/logo/quickplay-logo_scale_w_1400.png"
            width={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
