/**
 * Is this redundant?
 */
import { SHOW_ALERT } from "../actions/actionTypes";

const initialState = {
  alert: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return { ...state, alert: payload };
    default:
      return state;
  }
};
