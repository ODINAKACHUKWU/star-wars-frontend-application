import axios from "axios";
import TYPES from "../constants";
import BASE_URL from "../../api/request";

const {
  FETCHING_STARSHIPS,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
  FETCHING_STARSHIP,
  FETCH_STARSHIP_SUCCESS,
  FETCH_STARSHIP_FAILURE,
} = TYPES;

const fetchingStarships = (bool) => ({
  type: FETCHING_STARSHIPS,
  bool,
});

const fetchStarshipsSuccess = (starships) => ({
  type: FETCH_STARSHIPS_SUCCESS,
  starships,
});

const fetchStarshipsFailure = (error) => ({
  type: FETCH_STARSHIPS_FAILURE,
  error,
});

const fetchingStarship = (bool) => ({
  type: FETCHING_STARSHIP,
  bool,
});

const fetchStarshipSuccess = (starship) => ({
  type: FETCH_STARSHIP_SUCCESS,
  starship,
});

const fetchStarshipFailure = (error) => ({
  type: FETCH_STARSHIP_FAILURE,
  error,
});

const fetchStarshipsRequest = (resources) => async (dispatch) => {
  dispatch(fetchingStarships(true));
  try {
    const response = await axios.get(`${BASE_URL}/${resources}`);
    const { data } = response.data;
    dispatch(fetchStarshipsSuccess(data));
  } catch (error) {
    dispatch(fetchStarshipsFailure(error));
  } finally {
    dispatch(fetchingStarships(false));
  }
};

const fetchStarshipRequest = (resources, resourceId) => async (dispatch) => {
  dispatch(fetchingStarship(true));
  try {
    const response = await axios.get(`${BASE_URL}/${resources}/${resourceId}`);
    const { data } = response.data;
    dispatch(fetchStarshipSuccess(data));
  } catch (error) {
    dispatch(fetchStarshipFailure(error));
  } finally {
    dispatch(fetchingStarship(false));
  }
};

export { fetchStarshipsRequest, fetchStarshipRequest };
