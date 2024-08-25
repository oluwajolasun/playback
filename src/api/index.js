import axios from "axios";

const URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getNowPlayingMovies() {
  try {
    const response = await axios.get(
      `${URL}movie/now_playing?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

export async function getPopularMovies() {
  try {
    const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

export async function getUpcomingMovies() {
  try {
    const response = await axios.get(`${URL}movie/upcoming?api_key=${API_KEY}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

export async function getTopRatedMovies() {
  try {
    const response = await axios.get(
      `${URL}movie/top_rated?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

export async function getMovieDetails(movie_id) {
  try {
    const response = await axios.get(
      `${URL}movie/${movie_id}?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

export async function getMovieCast(movie_id) {
  try {
    const response = await axios.get(
      `${URL}movie/${movie_id}/credits?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

export async function getRecommendedMovies(movie_id) {
  try {
    const response = await axios.get(
      `${URL}movie/${movie_id}/recommendations?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

export async function getMovieTrailer(movie_id) {
  try {
    const response = await axios.get(
      `${URL}movie/${movie_id}/videos?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

export async function searchForMovie(query) {
  try {
    const response = await axios.get(
      `${URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

// getPopularMovies();

// getMovieCast(293660);

// getRecommendedMovies(293660);

// getNowPlayingMovies();

// getMovieTrailer(628962);

// getTopRatedMovies()

// getNowPlayingMovies();

// searchForMovie("dead");

// getMovieDetails(1225588)
