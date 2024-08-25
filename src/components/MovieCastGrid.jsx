import PropTypes from "prop-types";

const MovieCastGrid = (props) => {
  const casts = props.movieCastList;
  return (
    <div className="grid grid-flow-col gap-8 overflow-x-auto">
      {casts.map((cast, index) => (
        <div key={index} className="text-center w-36">
          <img
            src={
              cast.profile_path == null
                ? `https://eu.ui-avatars.com/api/?name=${cast.name}&size=250`
                : `https://image.tmdb.org/t/p/original/${cast.profile_path}`
            }
            alt={cast.name}
            className="object-cover h-52"
          />
          <div>{cast.name}</div>
        </div>
      ))}
    </div>
  );
};
export default MovieCastGrid;

MovieCastGrid.propTypes = {
  movieCastList: PropTypes.array.isRequired,
};
