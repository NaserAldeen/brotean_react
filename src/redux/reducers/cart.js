import { ADD_ITEM_CART, GET_CART } from "../actions/actionTypes";
const initialState = {
  cart: [[], 0]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_CART:
      if (payload.quantity === 0) {
        let newCart = state.cart[0].filter(item => {
          if (item.product_id) return item.product_id !== payload.item;
          else if (item.item) return item.item !== payload.item;
        });

        return {
          ...state,
          cart: [[...newCart], state.cart[1]]
        };
      }
      let existingItem = state.cart[0].find(item => {
        return item.product_id === payload.product_id;
      });

      if (existingItem) {
        existingItem.quantity = payload.quantity;
        return { ...state, cart: [...state.cart] };
      } else {
        let newCartItems = state.cart[0].concat(payload);
        return { ...state, cart: [[...newCartItems], state.cart[1]] };
      }
    case GET_CART:
      return { ...state, cart: [...payload] };
    default:
      return state;
  }
};
