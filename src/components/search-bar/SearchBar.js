import React, { useState } from "react";
import "./SearchBar.scss";
import { getMovies } from "../../redux/movies/movieActions";
import PropTypes from "prop-types";

const SearchBar = ({ getMovies }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please enter a movie");
    } else {
      setText("");
    }
  };
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        className="search-bar__input"
        id="search"
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span className="search-bar__delete">&#10006;</span>
    </form>
  );
};

SearchBar.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

export default SearchBar;
