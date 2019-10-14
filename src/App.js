import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import RegistationForm from "./components/RegistrationForm";
import GoogleFontLoader from "react-google-font-loader";
class App extends Component {
  render() {
    return (
      <div className="App" style={{ fontFamily: "Ubuntu, sans-serif" }}>
        <GoogleFontLoader
          fonts={[
            {
              font: "Ubuntu",
              weights: [400]
            }
          ]}
        />
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/products" />
          <Route path="/products/:prodID" component={ProductDetail} />
          <Route path="/products/" component={ProductList} />
          <Route path="/(login|register)" component={RegistationForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
