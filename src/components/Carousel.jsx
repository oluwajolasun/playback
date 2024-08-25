import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Carousel = (props) => {
  const movies = props.nowPlayingMovieList;
  return (
    <div className="mx-auto text-white 3xl:container ">
      <div className="flex w-full overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
        {movies.map((movie, index) => (
          <div key={index} className="w-full carousel-item ">
            <div
              className="h-screen md:h-[80vh] lg:h-[60vh] object-cover w-screen bg-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              }}
            >
              <div className="h-full backdrop-blur-md bg-black/70 hero ">
                <div className="flex-col gap-10 hero-content lg:flex-row 2xl:container md:container lg:container">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    className="shadow-2xl max-w-60"
                  />
                  <div>
                    <p>#{index + 1} Spotlight</p>
                    <h1 className="text-5xl font-bold">{movie.title}</h1>
                    <p className="my-3 line-clamp-2">{movie.overview}</p>
                    <Link to={`/movies/${movie.id}`}>
                      <button className="btn glass">Movie Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;

Carousel.propTypes = {
  nowPlayingMovieList: PropTypes.array.isRequired,
};
