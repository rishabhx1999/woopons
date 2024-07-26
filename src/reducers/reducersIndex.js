import changeLoginBoxOpenState from "./loginBoxOpenState.js";
import changeSideMenuOpenState from "./sideMenuOpenState.js";
import toggleUserMainOptionsBoxOpenState from "./userMainOptionsBoxOpenState.js";
import common from "./common.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeLoginBoxOpenState,
  changeSideMenuOpenState,
  toggleUserMainOptionsBoxOpenState,
  common,
});

export default rootReducer;
