import { combineReducers } from "redux-immutable";
import { reducer as home } from "./Modules/HomeModule";

export default combineReducers({
  home,
});
