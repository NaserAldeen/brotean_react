import React, { Component } from "react";
import NavCartItem from "./NavCartItem";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

class CartNavBar extends Component {
  componentDidMount() {
    /**
     * DO *NOT* USE JQUERY IN REACT!
     * If you're too lazy to figure out how to do this in standard react,
     * then at least use a ref: https://reactjs.org/docs/refs-and-the-dom.html
     */
    $(".dropdown-menu").click(function(e) {
      e.preventDefault();
    });
  }
  render() {
    if (!this.props.cart[0]) return null;
    const cartItems = this.props.cart[0].map((cartItem, idx) => {
      return <NavCartItem product={cartItem} key={idx} />;
    });
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faShoppingBag} />{" "}
            {cartItems ? this.props.cart[0].length : null}
            <span className="caret"></span>
          </button>
          <ul
            className="dropdown-menu-right dropdown-menu dropdown-cart"
            role="menu"
          >
            {cartItems}
            <li className="dropdown-divider"></li>
            <div className="row ml-3 justify-content-between">
              <div className="col">Total: {this.props.cart[1]}KD</div>
              <div className="col justify-content-right">
                {" "}
                <button type="button" className="btn btn-success btn-sm ml-4 ">
                  Checkout
                </button>
                <button type="button" className="btn btn-danger btn-sm ml-2">
                  Empty Cart
                </button>
              </div>
            </div>
          </ul>
        </li>
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.rootCart.cart,
    products: state.rootProducts.products
  };
};

export default connect(mapStateToProps)(CartNavBar);
