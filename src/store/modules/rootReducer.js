import { combineReducers } from "redux";

import { characters } from "./characters/reducers";

export default combineReducers({
  characters,
});
