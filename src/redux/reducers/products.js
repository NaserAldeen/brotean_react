import { GET_PRODUCTS } from "../actions/actionTypes";

/**
 * If the only thing in your state is the array,
 * you could expermint with having the entire array
 * be the state
 *
 * `const initialState = []`
 *
 */
const initialState = {
  products: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
