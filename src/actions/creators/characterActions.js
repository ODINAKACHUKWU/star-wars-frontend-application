import axios from "axios";
import TYPES from "../constants";
import BASE_URL from "../../api/request";

const {
  FETCHING_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCHING_CHARACTER,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
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

const fetchingCharacter = (bool) => ({
  type: FETCHING_CHARACTER,
  bool,
});

const fetchCharacterSuccess = (character) => ({
  type: FETCH_CHARACTER_SUCCESS,
  character,
});

const fetchCharacterFailure = (error) => ({
  type: FETCH_CHARACTER_FAILURE,
  error,
});

const fetchCharactersRequest = (resources) => async (dispatch) => {
  dispatch(fetchingCharacters(true));
  try {
    const response = await axios.get(`${BASE_URL}/${resources}`);
    const { data } = response.data;
    dispatch(fetchCharactersSuccess(data));
  } catch (error) {
    dispatch(fetchCharactersFailure(error));
  } finally {
    dispatch(fetchingCharacters(false));
  }
};

const fetchCharacterRequest = (resources, resourceId) => async (dispatch) => {
  dispatch(fetchingCharacter(true));
  try {
    const response = await axios.get(`${BASE_URL}/${resources}/${resourceId}`);
    const { data } = response.data;
    dispatch(fetchCharacterSuccess(data));
  } catch (error) {
    dispatch(fetchCharacterFailure(error));
  } finally {
    dispatch(fetchingCharacter(false));
  }
};

export { fetchCharactersRequest, fetchCharacterRequest };
