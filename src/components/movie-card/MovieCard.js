import React from "react";
import "./MovieCard.scss";
import CustomButton from "../custom-button/CustomButton";
import { useDispatch } from "react-redux";
import { getMovie } from "../../redux/movies/movieActions";

const MovieCard = ({ Title, Year, imdbID, Poster }) => {
  const dispatch = useDispatch();
  console.log(Title, Year, imdbID, Poster);
  if (Poster !== "N/A") {
    return (
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${Poster})` }}
        ></div>
        <div className="card__details">
          <h2 className="card__title">{Title}</h2>
          <span className="card__year">{Year}</span>
          <CustomButton onClick={() => dispatch(getMovie(imdbID))}>
            FIND OUT MORE
          </CustomButton>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default MovieCard;
