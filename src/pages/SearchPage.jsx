import { useEffect, useState } from "react";
import { searchForMovie } from "../api";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchedList, setSearchedList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      const response = await searchForMovie(query);
      //   console.log(response);
      setSearchedList(response.results);
    };

    fetchSearchedMovies();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
    console.log(searchedList);
  };

  return (
    <div className="2xl:container mx-auto min-h-[calc(100vh-128px)] text-white">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movie here..."
          className="w-full mx-auto my-3 input input-bordered"
          onChange={(e) => {
            console.log(e.target.value);
            setQuery(e.target.value);
          }}
        />
      </form>

      {query == "" ? (
        <p className="text-center">No movie found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {searchedList.map((movie) => (
            <div key={movie.id}>
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
                      <p className="text-sm text-center ">
                        {movie.release_date}
                      </p>
                      <p className="text-sm text-center ">
                        {movie.vote_average.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchPage;
