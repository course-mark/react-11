function MovieCard(props) {
  return (
    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
      <img
        alt="University of Southern California"
        className="absolute inset-0 h-full w-full object-cover"
        src={props.movie.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">
        {props.movie.name}
      </h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        {props.movie.type}
      </div>
    </div>
  );
}

export default MovieCard;
