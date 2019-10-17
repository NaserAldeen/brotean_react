import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import RegistationForm from "./components/RegistrationForm";
import GoogleFontLoader from "react-google-font-loader";
import $ from "jquery";
import { connect } from "react-redux";
import { showAlert } from "./redux/actions/alerts";
import { getCart } from "./redux/actions/cart";
import { Link } from "react-router-dom";
import { MDBNotification } from "mdbreact";

class App extends Component {
  state = {
    showAlertt: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.alertMessage.length != this.props.alertMessage.length) {
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
              weights: [400]
            }
          ]}
        />
        <Navbar />

        {this.state.showAlertt && (
          <MDBNotification
            autohide={2000}
            bodyClassName="p-5 font-weight-bold white-text"
            className="stylish-color-dark"
            closeClassName="blue-grey-text"
            fade
            icon="bell"
            iconClassName="blue-grey-text"
            message={
              this.props.alertMessage[this.props.alertMessage.length - 1]
            }
            show
            text="11 mins ago"
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
          <Route path="/products/:prodID" component={ProductDetail} />
          <Route path="/products/" component={ProductList} />
          <Route path="/(login|register)" component={RegistationForm} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    alertMessage: state.UI.alert,
    user: state.rootAuth,
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
