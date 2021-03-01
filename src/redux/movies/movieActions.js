import axios from "axios";
import { GET_MOVIES } from "./movieTypes";

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
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};
console.log(movieApiKey);
