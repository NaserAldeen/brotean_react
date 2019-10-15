import axios from "axios";
import { GET_PRODUCT } from "./actionTypes";
export const getProduct = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`);
      const currentProduct = res.data;

      dispatch({
        type: GET_PRODUCT,
        payload: currentProduct
      });
    } catch (err) {
      console.log(err);
    }
  };
};
