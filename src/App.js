import "./App.scss";
import NavBar from "./components/nav-bar/NavBar";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import MoviePage from "./pages/homepage/movie-page/MoviePage";
import { useSelector } from "react-redux";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/movie" component={MoviePage}></Route>
      </Switch>
    </div>
  );
};

export default App;
