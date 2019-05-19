import { combineReducers } from "redux";
import alertMessages from "./AlertMessages";
import auth from "./authReducer";

export default combineReducers({
  alertMessages,
  auth
});
