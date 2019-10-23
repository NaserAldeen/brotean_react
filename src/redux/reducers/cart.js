import {
  ADD_ITEM_CART,
  GET_CART,
  CHECKOUT,
  GET_USER_PROFILE,
  GET_ADDRESS
} from "../actions/actionTypes";
const initialState = {
  cart: [[], 0], //Array of two elemenets, [0] for cart items, [1] for total price (comes from backend)
  userProfile: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_PROFILE:
      return { ...state, userProfile: payload };
    case GET_ADDRESS:
      const existingAddress = state.userProfile.addresses.find(
        add => add.id == payload.id
      );
      if (existingAddress) {
        state.userProfile.addresses = [
          ...state.userProfile.addresses.map(add => {
            if (add.id == payload.id) {
              return payload;
            }
            return add;
          })
        ];
      } else
        state.userProfile.addresses = state.userProfile.addresses.concat(
          payload
        );
      return { ...state, userProfile: { ...state.userProfile } };
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
      state.userProfile.orders = [payload, ...state.userProfile.orders];
      return { ...state, cart: [[], 0], userProfile: { ...state.userProfile } };
    default:
      return state;
  }
};
