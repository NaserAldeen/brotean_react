import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_BRANDS
} from "../actions/actionTypes";
const initialState = {
  products: [],
  categories: [],

  brands: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };
    case GET_CATEGORIES:
      return { ...state, categories: payload };
    case GET_BRANDS:
      return { ...state, brands: payload };

    default:
      return state;
  }
};
