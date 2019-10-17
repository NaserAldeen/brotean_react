import { SHOW_ALERT } from "../actions/actionTypes";

const initialState = {
  spinnerCount: 1,
  alert: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_SPINNER":
      return { ...state, spinnerCount: payload };
    case SHOW_ALERT:
      return { ...state, alert: [...state.alert.concat(payload)] };
    default:
      return state;
  }
};
