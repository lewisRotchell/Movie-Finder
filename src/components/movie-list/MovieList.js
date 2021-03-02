import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../movie-card/MovieCard";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movieList);
  if (movies) console.log(movies);
  return (
    <div style={listStyle}>
      {!movies ? (
        <h1>Please search for a movie</h1>
      ) : (
        movies.map(({ ...movieProps }, index) => (
          <MovieCard key={index} {...movieProps} />
        ))
      )}
    </div>
  );
};

const listStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1rem",
  maxWidth: "1200px",
  textAlign: "center",
  margin: "0 auto",
};

export default MovieList;
