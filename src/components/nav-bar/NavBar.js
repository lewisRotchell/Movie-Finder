import React from "react";
import "./NavBar.scss";
import SearchBar from "../search-bar/SearchBar";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <SearchBar />
    </nav>
  );
};

export default NavBar;
