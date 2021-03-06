import React, { Component } from "react";
import { getProduct } from "../redux/actions";
import { connect } from "react-redux";
import QuantitySpinner from "./QuantitySpinner";
import { addItemToCart } from "../redux/actions";
import { showAlert } from "../redux/actions/alerts";
import LoadingSpinner from "./LoadingSpinner";

//Add stock quantity and category

class ProductDetail extends Component {
  state = {
    canAddToCart: true
  };
  componentDidMount() {
    this.props.getProduct(this.props.match.params.prodID);
  }
  componentWillUnmount() {
    this.props.resetProduct();
  }

  handleAddToCartClick = e => {
    if (!this.props.user) {
      this.props.showAlert("Login to add items to your cart");
      return;
    }
    if (this.props.spinnerCount > this.props.currentProduct.quantity) {
      this.setState({ canAddToCart: false });
    } else if (this.props.spinnerCount <= 0) {
      this.setState({ canAddToCart: false });
    } else {
      this.setState({ canAddToCart: true });
      this.props.addItemToCart(
        this.props.match.params.prodID,
        this.props.spinnerCount
      );
      this.props.showAlert("Added item successfully!");
    }
  };
  renderErrorsAfterClickingOnAddToCart() {
    if (!this.state.canAddToCart) {
      return "Not enough items in stock";
    }
  }
  render() {
    if (!this.props.currentProduct)
      return (
        <div className="container mt-5 text-center justify-content-center w-100">
          <LoadingSpinner />
        </div>
      );
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-4 ml-5 text-center text-center">
            <div className="row text-center">
              <img
                className="mt-5 mb-3"
                alt=""
                src={this.props.currentProduct.image}
                style={{ width: "340px", height: "400px" }}
              />
            </div>
            <div className="row text-center">
              <p className="text-muted">
                Items left in stock: {this.props.currentProduct.quantity}
              </p>
            </div>
            <div className="row text-center">
              <h5 className="" style={{ fontSize: "40px", marginLeft: "35px" }}>
                Price:{" "}
                <strong>
                  {Math.floor(this.props.currentProduct.price) ==
                  this.props.currentProduct.price
                    ? parseFloat(this.props.currentProduct.price)
                    : this.props.currentProduct.price}{" "}
                  KWD
                </strong>
              </h5>
            </div>
            <div className="row">
              <p>
                <button
                  className="btnAdd btn-5 btn-5a icon-cart"
                  onClick={
                    this.props.currentProduct.quantity > 0
                      ? this.handleAddToCartClick
                      : null
                  }
                >
                  {this.props.currentProduct.quantity > 0
                    ? "Add to cart"
                    : "OUT OF STOCK"}
                </button>
                <br />
                <span className="text-danger">
                  {this.renderErrorsAfterClickingOnAddToCart()}
                </span>
              </p>
            </div>
            <div className="row">
              <QuantitySpinner max={this.props.currentProduct.quantity} />
            </div>
          </div>
          <div className="col-6 ml-4 mt-5 text-center">
            <h1 className="" style={{ fontSize: "48px" }}>
              {this.props.currentProduct.name}
            </h1>
            <p className="mb-4 text-muted">
              {this.props.currentProduct.manufacturer ? "By: " : null}
              {this.props.currentProduct.manufacturer}
            </p>
            <p className="text-justify" style={{ lineHeight: "2" }}>
              {this.props.currentProduct.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentProduct: state.rootProduct.currentProduct,
    spinnerCount: state.UI.spinnerCount,
    user: state.rootAuth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //Syntax
    getProduct: id => dispatch(getProduct(id)),
    resetProduct: () => dispatch({ type: "RESET_PRODUCT" }),
    addItemToCart: (product_id, quantity) =>
      dispatch(addItemToCart(product_id, quantity)),
    showAlert: content => dispatch(showAlert(content))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
