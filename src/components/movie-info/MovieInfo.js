import React from "react";
import "./MovieInfo.scss";
import { useSelector } from "react-redux";

const MovieInfo = () => {
  const movie = useSelector((state) => state.movies.movie);
  const {
    Title,
    Year,
    Released,
    Runtime,
    Actors,
    Director,
    imdbRating,
    Poster,
    Genre,
    Plot,
  } = movie;
  console.log(movie);
  return <div>Movie Info</div>;
};

export default MovieInfo;
