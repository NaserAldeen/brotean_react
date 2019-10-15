// import { ADD_ITEM_CART } from "../actions/actionTypes"
const initialState = {
  spinnerCount: 1
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_SPINNER":
      return { ...state, spinnerCount: payload };

    default:
      return state;
  }
};
