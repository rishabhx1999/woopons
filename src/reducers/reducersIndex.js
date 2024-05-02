import changeLoginBoxOpenState from "./loginBoxOpenState.js";
import changeSideMenuOpenState from "./sideMenuOpenState.js";
import common from "./common.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeLoginBoxOpenState,
  changeSideMenuOpenState,
  common,
});

export default rootReducer;
