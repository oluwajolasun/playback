import PropTypes from "prop-types";

const MovieTrailer = (props) => {
  const trailerList = props.videoList.filter(
    (video) => video.type === "Trailer"
  );

  const firstTrailer = trailerList.length - 1;

  const trailer = trailerList[firstTrailer];
  return (
    <div className="video-responsive">
      {/* {console.log(trailerList)} */}

      {trailerList.length == 0 ? (
        <div>This movie has no trailer</div>
      ) : (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
export default MovieTrailer;

MovieTrailer.propTypes = {
  videoList: PropTypes.array.isRequired,
};
