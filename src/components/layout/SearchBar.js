import React, { useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movieActions";
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
    <nav className="deep-purple accent-4">
      <div className="nav-wrapper">
        <form onSubmit={onSubmit}>
          <div className="input-field">
            <input
              id="search"
              type="search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, { getMovies })(SearchBar);
