import { combineReducers } from "redux";
import movieReducer from "./movies/movieReducer";
export default combineReducers({
  movies: movieReducer,
});
