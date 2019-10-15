import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./products";
import productReducer from "./product";
import cartReducer from "./cart";
import UIComponents from "./UIComponents";

const rootReducer = combineReducers({
  rootAuth: authReducer,
  rootProducts: productsReducer,
  rootProduct: productReducer,
  rootCart: cartReducer,
  UI: UIComponents
});

export default rootReducer;
