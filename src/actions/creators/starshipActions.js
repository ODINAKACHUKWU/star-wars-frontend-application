import TYPES from "../constants";
import request from "../../api/request";

const {
  FETCHING_STARSHIPS,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
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

const fetchStarshipsRequest = (resources) => async (dispatch) => {
  dispatch(fetchingStarships(true));
  try {
    const response = await request(resources);
    console.log("================", response);
    // dispatch(fetchStarshipsSuccess());
  } catch (error) {
    dispatch(fetchStarshipsFailure(error));
  } finally {
    dispatch(fetchingStarships(false));
  }
};

export default fetchStarshipsRequest;
