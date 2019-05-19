import { SET_LOGEDIN_USER } from "../Actions/types";
import isEmpty from "lodash/isEmpty";
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGEDIN_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };

    default:
      return state;
  }
};
