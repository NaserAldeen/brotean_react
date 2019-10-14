import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./products";
import productReducer from "./product";

const rootReducer = combineReducers({
  rootAuth: authReducer,
  rootProducts: productsReducer,
  rootProduct: productReducer
});

export default rootReducer;
