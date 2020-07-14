import TYPES from "../actions/constants";

const {
  FETCHING_PLANETS,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILURE,
} = TYPES;

const initialState = {
  fetchingPlanets: false,
  planets: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PLANETS:
      return {
        ...state,
        fetchingPlanets: action.bool,
      };
    case FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.planets,
      };
    case FETCH_PLANETS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
