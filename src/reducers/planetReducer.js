import TYPES from "../actions/constants";

const {
  FETCHING_PLANETS,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILURE,
  FETCH_PLANET_FAILURE,
  FETCH_PLANET_SUCCESS,
  FETCHING_PLANET,
} = TYPES;

const initialState = {
  fetchingPlanets: false,
  fetchingPLanet: false,
  planet: {},
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
    case FETCHING_PLANET:
      return {
        ...state,
        fetchingPLanet: action.bool,
      };
    case FETCH_PLANET_SUCCESS:
      return {
        ...state,
        planet: action.planet,
      };
    case FETCH_PLANET_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
