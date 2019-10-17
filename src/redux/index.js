import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

import { checkForExpiredToken } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

/**
 * Put your early dispatches in one place.
 * Either move this dispatch to `src/index.js`
 * or move the dispatches from there to here.
 */
store.dispatch(checkForExpiredToken());

export default store;
