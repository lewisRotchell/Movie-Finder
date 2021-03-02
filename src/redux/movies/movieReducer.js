import { GET_MOVIES, GET_MOVIE } from "./movieTypes";
const initialState = {
  movieList: null,
  movie: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movieList: action.payload,
        loading: false,
      };
    default:
      return state;
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
  }
};
