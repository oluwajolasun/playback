import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="px-3 py-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div className="w-full">
          <img
            className="object-cover min-w-8/12"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="movie poster"
          />
          <div>
            <p className="font-bold text-center text-md line-clamp-1">
              {movie.title}
            </p>
            <p className="text-sm text-center ">{movie.release_date}</p>
            <p className="text-sm text-center ">
              {movie.vote_average.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
