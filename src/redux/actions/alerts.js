import { SHOW_ALERT } from "./actionTypes";
export const showAlert = content => {
  return {
    type: SHOW_ALERT,
    payload: content
  };
};
