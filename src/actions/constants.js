import keymirror from "keymirror";

const TYPES = keymirror({
  FETCHING_CHARACTERS: null,
  FETCHING_PLANETS: null,
  FETCHING_STARSHIPS: null,
  FETCH_CHARACTERS_SUCCESS: null,
  FETCH_CHARACTERS_FAILURE: null,
  FETCH_PLANETS_SUCCESS: null,
  FETCH_PLANETS_FAILURE: null,
  FETCH_STARSHIPS_SUCCESS: null,
  FETCH_STARSHIPS_FAILURE: null,
});

export default TYPES;
