import React from "react";

const MovieList = () => {
  return <div style={listStyle}>Movies</div>;
};

const listStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1rem",
};

export default MovieList;
