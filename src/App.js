import "./App.scss";
import NavBar from "./components/nav-bar/NavBar";
import MovieList from "./components/movie-list/MovieList";

const App = () => {
  return (
    <div>
      <NavBar />
      <MovieList />
    </div>
  );
};

export default App;
