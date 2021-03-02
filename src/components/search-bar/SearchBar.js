import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.scss";
import { getMovies } from "../../redux/movies/movieActions";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please enter a movie");
    } else {
      dispatch(getMovies(text));
      setText("");
      console.log(text);
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
      <span onClick={() => setText("")} className="search-bar__delete">
        &#10006;
      </span>
    </form>
  );
};

export default SearchBar;
