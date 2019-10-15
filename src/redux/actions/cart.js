import axios from "axios";
import { ADD_ITEM_CART } from "./actionTypes";
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
      console.log(cartItem);
      dispatch({
        type: ADD_ITEM_CART,
        payload: cartItem
      });
    } catch (err) {
      console.log(err);
    }
  };
};
