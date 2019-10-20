import "./App.css";
import GoogleFontLoader from "react-google-font-loader";

import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Actions
import { showAlert } from "./redux/actions/alerts";
import { getCart } from "./redux/actions/cart";

//Components
import Profile from "./components/Profile";
import RegistationForm from "./components/RegistrationForm";
import Checkout from "./components/Checkout";
import CategoriesList from "./components/CategoriesList";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { MDBNotification } from "mdbreact";

class App extends Component {
  state = {
    showAlertt: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.alertMessage.length !== this.props.alertMessage.length) {
      this.setState({ showAlertt: true });
      window.setTimeout(
        function() {
          this.setState({ showAlertt: false });
        }.bind(this),
        2500
      );
    }
  }

  render() {
    return (
      <div className="App" style={{ fontFamily: "Ubuntu, sans-serif" }}>
        <GoogleFontLoader
          fonts={[
            {
              font: "Ubuntu",
              weights: [300]
            }
          ]}
        />

        <Navbar />

        {this.state.showAlertt && (
          <MDBNotification
            autohide={2000}
            fade
            icon="bell"
            iconClassName="blue-grey-text"
            message={
              this.props.alertMessage[this.props.alertMessage.length - 1]
            }
            show
            title="Message"
            titleClassName="elegant-color-dark white-text"
            style={{
              position: "fixed",
              top: "10px",
              left: "10px",
              zIndex: 9999
            }}
          />
        )}

        <Switch>
          <Redirect exact from="/" to="/products" />
          <Route path="/profile/" component={Profile} />
          <Route path="/products/:prodID" component={ProductDetail} />
          <Route path="/products/" component={ProductList} />
          <Route path="/(login|register)" component={RegistationForm} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/categories" component={CategoriesList} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    alertMessage: state.UI.alert,
    user: state.rootAuth.user,
    products: state.rootProducts.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clearAlert: content => dispatch(showAlert(content)),
    getCart: () => dispatch(getCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
