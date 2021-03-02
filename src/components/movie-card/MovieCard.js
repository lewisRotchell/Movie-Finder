import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ Title, Year, imdbID, Poster }) => {
  console.log(Title, Year, imdbID, Poster);
  if (Poster !== "N/A") {
    return (
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${Poster})` }}
        ></div>
        <div className="card__heading">
          <h2 className="card__title">{Title}</h2>
          <span className="card__year">{Year}</span>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default MovieCard;
