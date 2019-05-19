import { SET_LOGEDIN_USER } from "./types";
import axios from "axios";
import SetAuthToken from "./SetAuthToken";
import { LoginApi } from "../API/API";

export function setCurrentUser(user) {
  return {
    type: SET_LOGEDIN_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem("user");
    SetAuthToken(false);
    dispatch(setCurrentUser({}));
  };
}

export const login = ({ userId, password }) => {
  return dispatch => {
    return axios
      .post(`${LoginApi}`, { email: userId, password: password })
      .then(response => {
        const token = response.data.token;
        let user = {};
        user.userId = userId;
        user.token = token;

        localStorage.setItem("user", JSON.stringify(user));

        SetAuthToken(token);
        dispatch(setCurrentUser(user));
      });
  };
};
