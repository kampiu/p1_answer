// import { combineReducers } from "redux-immutable";
// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";
import { reducer as homeReducer } from "./Modules/HomeModule";
import { reducer as commonReducer } from "./Modules/CommonModule";
import { reducer as productReducer } from "./Modules/ProductModule";

export default combineReducers({
  home: homeReducer,
  common: commonReducer,
  product: productReducer,
});
