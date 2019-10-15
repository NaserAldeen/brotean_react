import { combineReducers } from "redux";
//import your reducer files here like the following two lines
import authReducer from "./authReducer";
import productsReducer from "./products";
import productReducer from "./product";
import cartReducer from "./cart";
import UIComponents from "./UIComponents";
const rootReducer = combineReducers({
  //the following two lines are an example
  rootAuth: authReducer,
  rootProducts: productsReducer,
  rootProduct: productReducer,
  rootCart: cartReducer,
  UI: UIComponents
});

export default rootReducer;
