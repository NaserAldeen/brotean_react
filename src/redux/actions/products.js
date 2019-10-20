import axios from "axios";
import { GET_PRODUCTS, GET_CATEGORIES } from "./actionTypes";
export const getProducts = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/products/");
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
export const getCategories = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/category/");
      const categories = res.data;

      dispatch({
        type: GET_CATEGORIES,
        payload: categories
      });
    } catch (err) {
      console.log(err);
    }
  };
};
