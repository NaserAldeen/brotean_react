import { combineReducers } from "redux";
//import your reducer files here like the following two lines
import authReducer from "./authReducer";
import productsReducer from "./products";
import productReducer from "./product";
const rootReducer = combineReducers({
  //the following two lines are an example
  rootAuth: authReducer,
  rootProducts: productsReducer,
  rootProduct: productReducer
});

export default rootReducer;
