import PropTypes from "prop-types";

const MovieGrid = ({ children }) => {
  return (
    <div className="mx-auto 2xl:container">
      <div className="grid grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {children}
      </div>
    </div>
  );
};
export default MovieGrid;

MovieGrid.propTypes = {
  children: PropTypes.array.isRequired,
};
