import React from "react";
import "./MovieInfo.scss";
import { useSelector } from "react-redux";

const MovieInfo = () => {
  const movie = useSelector((state) => state.movies.movie);

  if (!movie) return <p>Loading</p>;

  console.log(movie);

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

  return (
    <div className="movie-info">
      <div
        className="movie-info__image"
        style={{ backgroundImage: `url(${Poster})` }}
      ></div>
      <div className="movie-info__main">
        <h2>{Title}</h2>
        <h4>{Year}</h4>
        <h4>{Genre}</h4>
        <h4>Starring: {Actors}</h4>
        <h4>Directed By: {Director}</h4>
      </div>
      <div className="movie-info__sub">
        <p>{Plot}</p>
        <h4>{Runtime}</h4>
        <h4>imdbRating: {imdbRating}</h4>
      </div>
    </div>
  );
};

export default MovieInfo;
