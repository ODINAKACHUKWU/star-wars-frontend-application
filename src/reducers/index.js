import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import planetReducer from "./planetReducer";
import starshipReducer from "./starshipReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  character: characterReducer,
  planet: planetReducer,
  starship: starshipReducer,
  search: searchReducer,
});

export default rootReducer;
