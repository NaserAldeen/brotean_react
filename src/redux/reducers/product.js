import { GET_PRODUCT } from "../actions/actionTypes";
const initialState = {
  currentProduct: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return { ...state, currentProduct: payload };
    case "RESET_PRODUCT":
      return { ...state, currentProduct: [] };

    default:
      return state;
  }
};
