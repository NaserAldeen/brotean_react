import axios from "axios";
import { ADD_ITEM_CART, GET_CART } from "./actionTypes";

export const addItemToCart = (product_id, quantity) => {
  return async dispatch => {
    try {
      const data = {
        item: product_id,
        quantity: quantity
      };
      const res = await axios.post(
        `http://127.0.0.1:8000/api/add_product/`,
        data
      );
      const cartItem = res.data;
      dispatch({
        type: ADD_ITEM_CART,
        payload: quantity ? cartItem : data
      });
    } catch (err) {
      console.error(err);
    }
  };
};
export const getCart = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/get_cart/`);
      const cart = res.data;
      console.log(cart);
      dispatch({
        type: GET_CART,
        payload: [cart[0].cart_items, cart[0].total]
      });
    } catch (err) {
      console.error(err);
    }
  };
};
