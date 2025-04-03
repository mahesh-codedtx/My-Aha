import { IMovies } from "../../utils/Home/movies";
import { constructImageUrl } from "../ImageResizer/imageResizer";
import "./index.css";
import { TiTick } from "react-icons/ti";
const JumpCard = ({
  movie,
  isRoundedImage,
}: {
  movie: any;
  isRoundedImage: boolean;
}) => {
  console.log(movie.ent[0].sp);
  return (
    <section>
      <div className="single-image-container">
        <div className="image-size cursor">
          <img
            src={
              constructImageUrl(
                `${movie.id}`,
                movie.ia[2],
                305,
                `${movie.ut}`
              ) || "https://www.aha.video/aha-gray-logo.29a310bfcc08d0e8.svg"
            }
            style={{
              width: "100%",
              height: "100%",
              borderRadius: `${isRoundedImage ? "50%" : "8px"}`,
            }}
          />
          {!movie.ent[0].sp && (
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
          <p className="single-image-text">{movie.lon[0].n}</p>
        </div>
      </div>
    </section>
  );
};

export default JumpCard;
