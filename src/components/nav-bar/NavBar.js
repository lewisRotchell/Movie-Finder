import React from "react";
import "./NavBar.scss";
import SearchBar from "../search-bar/SearchBar";
import { withRouter } from "react-router-dom";

const NavBar = ({ history }) => {
  const handleClick = () => {
    history.push({
      pathname: "/",
    });
  };
  return (
    <nav className="nav-bar">
      {history.location.pathname === "/movie" ? (
        <button onClick={handleClick}>Back</button>
      ) : (
        <SearchBar />
      )}
    </nav>
  );
};

export default withRouter(NavBar);
