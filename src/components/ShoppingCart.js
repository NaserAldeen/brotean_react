import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import NavCartItem from "./NavCartItem";
import { addItemToCart } from "../redux/actions";

/**
 * `useState`
 */
class ShoppingCart extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  clearCart() {
    this.props.cart[0].forEach(item =>
      this.props.addItemToCart(item.product_id, 0)
    );
  }
  render() {
    if (!this.props.cart[0]) return null;
    const cartItems = this.props.cart[0].map((cartItem, idx) => {
      return <NavCartItem product={cartItem} key={idx} />;
    });
    console.log(cartItems);
    return (
      <>
        {/* BUTTON */}
        <MDBBtn
          color="info"
          onClick={this.toggle}
          style={{ display: "inline" }}
        >
          <FontAwesomeIcon icon={faShoppingBag} />{" "}
          {cartItems ? this.props.cart[0].length : null}
        </MDBBtn>
        {/* MODAL */}
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          side
          position="top-right"
        >
          <MDBModalHeader toggle={this.toggle}>Your Cart</MDBModalHeader>
          <MDBModalBody style={{ height: `${cartItems.length * 100}px` }}>
            <div>
              <ul class="list-group list-group-flush">{cartItems}</ul>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger" onClick={() => this.clearCart()}>
              clear cart
            </MDBBtn>
            <MDBBtn color="primary">Checkout</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.rootCart.cart,
    products: state.rootProducts.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: (product_id, quantity) =>
      dispatch(addItemToCart(product_id, quantity))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
