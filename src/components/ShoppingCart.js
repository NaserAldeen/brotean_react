import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { addItemToCart } from "../redux/actions";
import { Link } from "react-router-dom";

//Components
import NavCartItem from "./NavCartItem";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

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

    const calculateModalLength = () => {
      if (this.props.cart[0].length > 0) {
        return cartItems.length * 100;
      } else {
        return 80;
      }
    };

    return (
      <>
        <MDBBtn
          color="info"
          onClick={this.toggle}
          style={{ display: "inline" }}
        >
          <div
            style={{
              position: "absolute",
              left: "2px",
              top: "1px",
              width: "10%",
              height: "10%"
            }}
          >
            <a
              href="#"
              className="badge badge-secondary"
              style={{ width: "15px", height: "15px" }}
            >
              {cartItems ? this.props.cart[0].length : null}
            </a>
          </div>
          <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
          {this.props.cart[1]} KD
        </MDBBtn>

        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          side
          position="top-right"
        >
          <MDBModalHeader toggle={this.toggle}>Your Cart</MDBModalHeader>

          <MDBModalBody style={{ height: `${calculateModalLength()}px` }}>
            {this.props.cart[0].length ? (
              <div>
                <ul className="list-group list-group-flush">{cartItems}</ul>
              </div>
            ) : (
              <p>Add items to your cart!</p>
            )}
          </MDBModalBody>
          {this.props.cart[0].length ? (
            <MDBModalFooter>
              <p className="mt-3 mr-4">Total: {this.props.cart[1]}KD</p>
              <MDBBtn color="danger" size="sm" onClick={() => this.clearCart()}>
                clear cart
              </MDBBtn>
              <Link to="/checkout" onClick={this.toggle}>
                <MDBBtn color="primary" size="sm">
                  Checkout
                </MDBBtn>
              </Link>
            </MDBModalFooter>
          ) : null}
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
