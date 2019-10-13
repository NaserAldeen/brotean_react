import axios from "axios";
import { GET_PRODUCT } from "./actionTypes";
export const getProduct = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8000/api/detail/${id}/`);
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
