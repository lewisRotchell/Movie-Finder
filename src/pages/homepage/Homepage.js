import React from "react";
import "./Homepage.scss";
import MovieList from "../../components/movie-list/MovieList";

const Homepage = () => {
  return (
    <div className="movie-list">
      <MovieList />
    </div>
  );
};

export default Homepage;
