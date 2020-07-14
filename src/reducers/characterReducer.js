import TYPES from "../actions/constants";

const {
  FETCHING_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTER_FAILURE,
  FETCH_CHARACTER_SUCCESS,
  FETCHING_CHARACTER,
} = TYPES;

const initialState = {
  fetchingCharacters: false,
  fetchingCharacter: false,
  characters: [],
  character: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return {
        ...state,
        fetchingCharacters: action.bool,
      };
    case FETCHING_CHARACTER:
      return {
        ...state,
        fetchingCharacter: action.bool,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters,
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.character,
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
