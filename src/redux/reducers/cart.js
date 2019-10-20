import { ADD_ITEM_CART, GET_CART, CHECKOUT } from "../actions/actionTypes";
const initialState = {
  cart: [[], 0] //Array of two elemenets, [0] for cart items, [1] for total price (comes from backend)
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_CART:
      if (payload.quantity === 0) {
        let newCart = state.cart[0].filter(item => {

          if (item.product_id) {
            return item.product_id != payload.item;
          } else if (item.item) {
            return item.item != payload.item;
          }
        });
        let newTotal = 0;

        newCart.forEach(item => {
          newTotal += item.quantity * item.price;

        });

        return {
          ...state,
          cart: [[...newCart], newTotal]
        };
      }
      let existingItem = state.cart[0].find(item => {
        return item.product_id === payload.product_id;
      });

      if (existingItem) {
        state.cart[1] +=
          existingItem.price * (payload.quantity - existingItem.quantity);

        existingItem.quantity = payload.quantity;
        return { ...state, cart: [...state.cart] };
      } else {
        let newCartItems = state.cart[0].concat(payload);

        let newTotal = 0;

        newCartItems.forEach(item => {
          newTotal += item.quantity * item.price;
        });
        return { ...state, cart: [[...newCartItems], newTotal] };

      }
    case GET_CART:
      return { ...state, cart: [...payload] };
    case CHECKOUT:
      return { ...state, cart: [[], 0] };
    default:
      return state;
  }
};
