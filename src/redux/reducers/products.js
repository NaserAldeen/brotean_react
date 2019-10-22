import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_BRANDS
} from "../actions/actionTypes";
const initialState = {
  products: [],
  categories: [],
  selectedCategory: "",
  selectedBrand: "",
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
    case "SET_CATEGORY":
      return { ...state, selectedCategory: payload };
    case "SET_BRAND":
      return { ...state, selectedBrand: payload };
    default:
      return state;
  }
};
