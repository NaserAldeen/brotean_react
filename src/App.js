import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import RegistationForm from "./components/RegistrationForm";
class App extends Component {
  render() {
    return (
      <div className="App">
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
/*
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
const mapStateToProps = state => {
  return {
    user: state.rootAuth
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);*/
export default App;
