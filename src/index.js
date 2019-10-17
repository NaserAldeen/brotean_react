/**
 * Clean up and organize your imports.
 * E.g.:
 * - Libraries/packages
 * - Styling
 * - Components
 * - Redux
 */
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Are you using this? If not, remove it.
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getProducts } from "./redux/actions";
// import your redux/index.js here (the store)
import store from "./redux";
import "mdbreact/dist/css/mdb.css";

/**
 * Put your early dispatches in one place.
 * Either move this dispatch to `src/redux/index.js`
 * or move the dispatches from there to here.
 */
store.dispatch(getProducts());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
