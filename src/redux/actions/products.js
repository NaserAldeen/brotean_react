import axios from "axios";
import { GET_PRODUCTS } from "./actionTypes";
export const getProducts = () => {
  return async dispatch => {
    try {
      const res = await axios.get("https://5965cbed.ngrok.io/api/list/");
      const products = res.data;

      dispatch({
        type: GET_PRODUCTS,
        payload: products
      });
    } catch (err) {
      console.log(err);
    }
  };
};
