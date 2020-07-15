import axios from "axios";
import TYPES from "../constants";
import BASE_URL from "../../api/request";

const {
  FETCHING_PLANETS,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILURE,
  FETCHING_PLANET,
  FETCH_PLANET_SUCCESS,
  FETCH_PLANET_FAILURE,
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

const fetchingPlanet = (bool) => ({
  type: FETCHING_PLANET,
  bool,
});

const fetchPlanetSuccess = (planet) => ({
  type: FETCH_PLANET_SUCCESS,
  planet,
});

const fetchPlanetFailure = (error) => ({
  type: FETCH_PLANET_FAILURE,
  error,
});

const fetchPlanetsRequest = (resources) => async (dispatch) => {
  dispatch(fetchingPlanets(true));
  try {
    const response = await axios.get(`${BASE_URL}/${resources}`);
    const { data } = response.data;
    dispatch(fetchPlanetsSuccess(data));
  } catch (error) {
    dispatch(fetchPlanetsFailure(error));
  } finally {
    dispatch(fetchingPlanets(false));
  }
};

const fetchPlanetRequest = (resources, resourceId) => async (dispatch) => {
  dispatch(fetchingPlanet(true));
  try {
    const response = await axios.get(`${BASE_URL}/${resources}/${resourceId}`);
    const { data } = response.data;
    dispatch(fetchPlanetSuccess(data));
  } catch (error) {
    dispatch(fetchPlanetFailure(error));
  } finally {
    dispatch(fetchingPlanet(false));
  }
};

export { fetchPlanetsRequest, fetchPlanetRequest };
