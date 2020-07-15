import TYPES from "../actions/constants";

const {
  FETCHING_STARSHIPS,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
  FETCH_STARSHIP_FAILURE,
  FETCH_STARSHIP_SUCCESS,
  FETCHING_STARSHIP,
} = TYPES;

const initialState = {
  fetchingStarships: false,
  fetchingStarship: false,
  starship: {},
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
    case FETCHING_STARSHIP:
      return {
        ...state,
        fetchingStarship: action.bool,
      };
    case FETCH_STARSHIP_SUCCESS:
      return {
        ...state,
        starship: action.starship,
      };
    case FETCH_STARSHIP_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
