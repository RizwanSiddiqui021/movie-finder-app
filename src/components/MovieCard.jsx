import PropTypes from "prop-types";
import star_icon from "../assets/star.svg";
import no_poster_logo from "../assets/no-movie.png";
const MovieCard = ({
  movie: { title, vote_average, poster_path, original_language, release_date },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${no_poster_logo}`
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
      </div>
      <div className="content">
        <div className="rating">
          <img src={star_icon} alt="Star Icon" />
          <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        </div>
        <span>•</span>
        <p className="lang">{original_language}</p>
        <span>•</span>
        <p className="year">
          {release_date ? release_date.split("-")[0] : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.array,
};
