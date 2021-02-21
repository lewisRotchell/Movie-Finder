import axios from "axios";
import { GET_MOVIES } from "./types";

let movieApiKey = process.env.MOVIE_API_KEY;

export const getMovies = (title) => async (dispatch) => {
  try {
    const response = await axios.get("http://img.omdbapi.com", {
      params: {
        apiKey: movieApiKey,
        t: title,
      },
    });
    dispatch({
      type: GET_MOVIES,
      payload: response,
    });
  } catch (err) {
    console.error(err);
  }
};
