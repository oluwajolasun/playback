import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api";
// import LoadingPage from "./LoadingPage";

const HomePage = () => {
  const [nowPlayingMovieList, setNowPlayingMovieList] = useState([]);
  const [popularMovieList, setPopularMovieList] = useState([]);
  const [upcomingMovieList, setUpcomingMovieList] = useState([]);
  const [topRatedMovieList, setTopRatedMovieList] = useState([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      const response = await getNowPlayingMovies();
      setNowPlayingMovieList(response.results.slice(0, 9));
    };

    const fetchPopularMovies = async () => {
      const response = await getPopularMovies();
      setPopularMovieList(response.results.slice(0, 16));
    };

    const fetchUpcomingMovies = async () => {
      const response = await getUpcomingMovies();
      setUpcomingMovieList(response.results.slice(0, 16));
    };

    const fetchTopRatedMovies = async () => {
      const response = await getTopRatedMovies();
      setTopRatedMovieList(response.results.slice(0, 16));
    };

    fetchNowPlayingMovies();
    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchTopRatedMovies();
  }, []);

  // nowPlayingMovieList.length == 0 ||
  //   popularMovieList.length == 0 ||
  //   upcomingMovieList.length == 0 ||
  //   topRatedMovieList.length == 0 ? (
  //   <LoadingPage />
  // ) :

  return (
    <div className="text-white">
      {console.log(nowPlayingMovieList)}
      <Carousel nowPlayingMovieList={nowPlayingMovieList} />
      <h1 className="container mx-auto mt-8 text-3xl">Popular Movies</h1>
      <MovieGrid>
        {popularMovieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
      <h1 className="container mx-auto mt-8 text-3xl">Top Rated Movies</h1>
      <MovieGrid>
        {topRatedMovieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
      <h1 className="container mx-auto mt-8 text-3xl">Upcoming Movies</h1>
      <MovieGrid>
        {upcomingMovieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </div>
  );
};
export default HomePage;
