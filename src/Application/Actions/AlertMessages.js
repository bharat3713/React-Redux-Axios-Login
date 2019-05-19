import { ADD_ALERT_MESSAGE, DELETE_ALERT_MESSAGE } from "./types";

export function addAlertMessages(message) {
  return {
    type: ADD_ALERT_MESSAGE,
    message
  };
}

export function deleteAlertMessages(id) {
  return {
    type: DELETE_ALERT_MESSAGE,
    id
  };
}
