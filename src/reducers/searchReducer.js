import TYPES from "../actions/constants";

const { SEARCHING, SEARCH_SUCCESS, SEARCH_FAILURE } = TYPES;

const initialState = {
  searching: false,
  result: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING:
      return {
        ...state,
        searching: action.bool,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        result: action.result,
        error: "",
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
