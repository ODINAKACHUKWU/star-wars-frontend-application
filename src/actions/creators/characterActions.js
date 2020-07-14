import TYPES from "../constants";
import request from "../../api/request";

const {
  FETCHING_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} = TYPES;

const fetchingCharacters = (bool) => ({
  type: FETCHING_CHARACTERS,
  bool,
});

const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  characters,
});

const fetchCharactersFailure = (error) => ({
  type: FETCH_CHARACTERS_FAILURE,
  error,
});

const fetchCharactersRequest = (resources) => async (dispatch) => {
  dispatch(fetchingCharacters(true));
  try {
    const response = await request(resources);
    dispatch(fetchCharactersSuccess(response.data));
  } catch (error) {
    dispatch(fetchCharactersFailure(error));
  } finally {
    dispatch(fetchingCharacters(false));
  }
};

export default fetchCharactersRequest;
