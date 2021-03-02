import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ Title, Year, imdbID, Poster }) => {
  console.log(Title, Year, imdbID, Poster);
  return <div className="card"></div>;
};

export default MovieCard;
