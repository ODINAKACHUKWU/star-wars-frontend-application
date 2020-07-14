import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import planetReducer from "./planetReducer";
import starshipReducer from "./starshipReducer";

const rootReducer = combineReducers({
  character: characterReducer,
  planet: planetReducer,
  starship: starshipReducer,
});

export default rootReducer;
