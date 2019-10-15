import { ADD_ITEM_CART } from "../actions/actionTypes";
const initialState = {
  cart: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_CART:
      let newArr = state.cart.concat(payload);
      return { ...state, cart: [...newArr] };

    default:
      return state;
  }
};
