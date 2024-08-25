import PropTypes from "prop-types";

const SimilarMoviesGrid = (props) => {
  const movies = props.recommendedMovieList;
  return (
    <div className="grid grid-flow-col gap-8 overflow-x-auto">
      {movies.length == 0
        ? "This movie does not have similar movies"
        : movies.map((movie) => (
            <div key={movie.id} className="text-center w-36">
              <a href={`/movies/${movie.id}`}>
                <div>
                  <img
                    src={
                      movie.poster_path == null
                        ? "/src/assets/placeholder-image.jpg"
                        : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    }
                    alt=""
                    className="object-cover h-52"
                  />
                  <div>{movie.title}</div>
                </div>
              </a>
            </div>
          ))}
    </div>
  );
};
export default SimilarMoviesGrid;

SimilarMoviesGrid.propTypes = {
  recommendedMovieList: PropTypes.array.isRequired,
};
