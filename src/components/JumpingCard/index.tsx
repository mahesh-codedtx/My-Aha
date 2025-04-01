import { IMovies } from "../../utils/Home/movies";
import "./index.css";
import { TiTick } from "react-icons/ti";
const JumpCard = ({
  movie,
  isRoundedImage,
}: {
  movie: IMovies;
  isRoundedImage: boolean;
}) => {
  return (
    <section>
      <div className="single-image-container">
        <div className="image-size cursor">
          <img
            src={
              movie.movieImg ||
              "https://www.aha.video/aha-gray-logo.29a310bfcc08d0e8.svg"
            }
            style={{
              width: "100%",
              height: "100%",
              borderRadius: `${isRoundedImage ? "50%" : "8px"}`,
            }}
          />
          {movie.isPremium && (
            <div className="premium-tag">
              <TiTick size={12} />
              <p className="premium-text">Premium</p>
            </div>
          )}
          {movie.overlayText && (
            <div className="overlay-text-container">
              <p className="overlay-text">{movie.overlayText}</p>
            </div>
          )}

          {movie.isOverlayPlayIcon && (
            <div className="overlay-play-icon">
              <img src="https://www.aha.video/play-card.ab88a1030c118a61.svg" />
            </div>
          )}
        </div>
        <div style={{ textAlign: "left" }}>
          <p className="single-image-text">{movie.movieTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default JumpCard;
