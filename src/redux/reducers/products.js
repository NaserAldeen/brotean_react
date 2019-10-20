import { GET_PRODUCTS, GET_CATEGORIES } from "../actions/actionTypes";
const initialState = {
  products: [],
  categories: [],
  selectedCategory: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };
    case GET_CATEGORIES:
      return { ...state, categories: payload };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: payload };
    default:
      return state;
  }
};
