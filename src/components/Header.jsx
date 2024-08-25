import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black">
      <div className="relative mx-auto navbar 2xl:container md:container lg:container">
        <div className="flex-1">
          <Link to="/" className="text-xl text-orange-400">
            PLAYBACK
          </Link>
        </div>
        <Link to={"/search"}>
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
