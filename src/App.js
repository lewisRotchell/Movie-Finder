import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";

const App = () => {
  useEffect(() => {
    //initialises materialize's JS
    M.AutoInit();
  });
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;
