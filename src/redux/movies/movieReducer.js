import { GET_MOVIES } from "./movieTypes";
const initialState = {
  movies: null,
  movie: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
