import TYPES from "../actions/constants";

const {
  FETCHING_STARSHIPS,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
} = TYPES;

const initialState = {
  fetchingStarships: false,
  starships: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_STARSHIPS:
      return {
        ...state,
        fetchingStarships: action.bool,
      };
    case FETCH_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: action.starships,
      };
    case FETCH_STARSHIPS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
