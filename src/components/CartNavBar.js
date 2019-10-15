import React, { Component } from "react";
import NavCartItem from "./NavCartItem";
import { connect } from "react-redux";
class CartNavBar extends Component {
  render() {
    const cartItems = this.props.cart.map(cartItem => {
      let product = this.props.products.find(prod => prod.id == cartItem.item);
      return <NavCartItem product={product} quantity={cartItem.quantity} />;
    });
    return (
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
            {this.props.cart.length} - Items
            <span class="caret"></span>
          </a>
          <ul
            class="dropdown-menu-right dropdown-menu dropdown-cart"
            role="menu"
          >
            {cartItems}
            <li class="dropdown-divider"></li>
            <li className="text-center">
              <a class="text-center" href="">
                View Cart
              </a>
            </li>
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
//   const mapDispatchToProps = dispatch => {
//     return {
//       //Syntax
//       getProduct: id => dispatch(getProduct(id)),
//       resetProduct: () => dispatch({ type: "RESET_PRODUCT" }),
//       addItemToCart: (product_id, quantity) =>
//         dispatch(addItemToCart(product_id, quantity))
//     };
//   };
export default connect(mapStateToProps)(CartNavBar);
