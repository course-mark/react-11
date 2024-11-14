import React, { useState } from "react";
import MovieCard from "./MovieCard";


const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Deadpool",
      type: "Movie",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/9905f7b495e50ee0171beaee3ade123f054304a5ac953e109736daf53cf40835._SX1080_FMjpg_.jpg",
    },
    {
      name: "TMKOC",
      type: "Series",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5mDTX_fu1g9g6pXvwsaB-hUNPfrdG4ntNGy2jL3DtVOIiYadQ",
    },
  ]);

  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard movie={movie}></MovieCard>;
      })}
    </div>
  );
};

export default MovieList;
