import axios from "axios";
import { GET_MOVIES, GET_MOVIE } from "./movieTypes";

const movieApiKey = process.env.REACT_APP_MOVIE_API_KEY;

export const getMovies = (title) => async (dispatch) => {
  try {
    const response = await axios.get("http://www.omdbapi.com", {
      params: {
        apiKey: movieApiKey,
        s: title,
      },
    });
    dispatch({
      type: GET_MOVIES,
      payload: response.data.Search,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getMovie = (imdbID) => async (dispatch) => {
  try {
    const response = await axios.get("http://www.omdbapi.com", {
      params: {
        apiKey: movieApiKey,
        i: imdbID,
      },
    });
    dispatch({
      type: GET_MOVIE,
      payload: response.data,
    });
  } catch (err) {
    console.err(err);
  }
};
