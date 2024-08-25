import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getMovieCast,
  getMovieDetails,
  getMovieTrailer,
  getRecommendedMovies,
} from "../api";
import MovieCastGrid from "../components/MovieCastGrid";
import SimilarMoviesGrid from "../components/SimilarMoviesGrid";
import MovieTrailer from "../components/MovieTrailer";
import LoadingPage from "./LoadingPage";

const MoviePage = () => {
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCastList, setMovieCastList] = useState([]);
  const [recommendedMovieList, setRecommendedMovieList] = useState([]);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await getMovieDetails(movie_id);
      setMovieDetails(response);
    };

    const fetchMovieCast = async () => {
      const response = await getMovieCast(movie_id);
      setMovieCastList(response.cast.slice(0, 16));
    };

    const fetchSimilarMovies = async () => {
      const response = await getRecommendedMovies(movie_id);
      setRecommendedMovieList(response.results.slice(0, 16));
    };

    const fetchMovieTrailer = async () => {
      const response = await getMovieTrailer(movie_id);
      setVideoList(response.data.results);
    };

    fetchMovieDetails();
    fetchMovieCast();
    fetchSimilarMovies();
    fetchMovieTrailer();
  }, [movie_id]);

  const movie = movieDetails;

  if (movieDetails.length == 0 || movieCastList.length == 0) {
    return <LoadingPage />;
  }

  return (
    <div className="text-white ">
      <div
        className="object-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className=" backdrop-blur-lg bg-black/70">
          <div className="container mx-auto bg-center 2xl:container md:container lg:container ">
            <div className="flex flex-col items-center gap-2 py-5 sm:flex-row sm:gap-10 sm:p-20">
              <div className="sm:max-w-[300px]">
                <img
                  className="max-w-72"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="">
                <div className="my-4 text-4xl font-bold uppercase">
                  {movie.title}
                </div>
                <div className="flex items-center gap-4 my-4">
                  <div>
                    <p>{movie.release_date}</p>
                    <p>{movie.runtime} mins</p>
                  </div>
                  <div
                    className="text-green-400 bg-transparent radial-progress "
                    style={{
                      "--value": (movie.vote_average / 10) * 100,
                      "--size": "3rem",
                      "--thickness": "6px",
                    }}
                    role="progressbar"
                  >
                    {((movie.vote_average / 10) * 100).toFixed(0)}
                  </div>
                </div>
                <div className="my-4 text-left">{movie.overview}</div>
                <div className="flex flex-row gap-5 my-4">
                  {movie.genres.map((genre) => (
                    <div key={genre.id} className="gap-3 badge no-animation">
                      {genre.name}
                    </div>
                  ))}
                </div>
                <div className="m-auto">
                  <button className="btn glass">
                    <a href={`${movie.homepage}`} target="blank">
                      OFFICIAL MOVIE PAGE
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-center my-9 2xl:container md:container lg:container">
        <h1 className="">CAST</h1>
        {/* {console.log(movieCastList)} */}
        <MovieCastGrid movieCastList={movieCastList} />
      </div>
      <div className="container mx-auto bg-center 2xl:container md:container lg:container my-9">
        {/* {console.log(trailerList)} */}
        <MovieTrailer videoList={videoList} />
      </div>
      <div className="container mx-auto bg-center 2xl:container md:container lg:container my-9">
        <h1>SIMILAR MOVIES</h1>
        {/* {console.log(recommendedMovieList)} */}
        <SimilarMoviesGrid recommendedMovieList={recommendedMovieList} />
      </div>
    </div>
  );
};
export default MoviePage;
