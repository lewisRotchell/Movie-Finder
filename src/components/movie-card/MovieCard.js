import React from "react";
import "./MovieCard.scss";
import CustomButton from "../custom-button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../redux/movies/movieActions";
import { withRouter } from "react-router-dom";

const MovieCard = ({ Title, Year, imdbID, Poster, history, match }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getMovie(imdbID));

    history.push({
      pathname: "/movie",
    });
  };

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
          <CustomButton onClick={handleSubmit}>FIND OUT MORE</CustomButton>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default withRouter(MovieCard);
