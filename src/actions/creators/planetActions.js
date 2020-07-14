import TYPES from "../constants";
import request from "../../api/request";

const {
  FETCHING_PLANETS,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILURE,
} = TYPES;

const fetchingPlanets = (bool) => ({
  type: FETCHING_PLANETS,
  bool,
});

const fetchPlanetsSuccess = (planets) => ({
  type: FETCH_PLANETS_SUCCESS,
  planets,
});

const fetchPlanetsFailure = (error) => ({
  type: FETCH_PLANETS_FAILURE,
  error,
});

const fetchPlanetsRequest = (resources) => async (dispatch) => {
  dispatch(fetchingPlanets(true));
  try {
    const response = await request(resources);
    console.log("================", response);
    // dispatch(fetchPlanetsSuccess());
  } catch (error) {
    dispatch(fetchPlanetsFailure(error));
  } finally {
    dispatch(fetchingPlanets(false));
  }
};

export default fetchPlanetsRequest;
