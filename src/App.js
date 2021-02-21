import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import MovieList from "./components/MovieList";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    //initialises materialize's JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <div>
        <SearchBar />
        <div className="container">
          <MovieList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
