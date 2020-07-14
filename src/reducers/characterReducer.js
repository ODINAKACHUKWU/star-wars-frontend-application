import TYPES from "../actions/constants";

const {
  FETCHING_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} = TYPES;

const initialState = {
  fetchingCharacters: false,
  characters: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return {
        ...state,
        fetchingCharacters: action.bool,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters,
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
