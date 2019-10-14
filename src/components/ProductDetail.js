import React, { Component } from "react";
import { getProduct } from "../redux/actions";
import { connect } from "react-redux";
import QuantitySpinner from "./QuantitySpinner";
class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.prodID);
  }
  componentWillUnmount() {
    this.props.resetProduct();
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 ml-5">
            <div className="row">
              <img
                className="mt-5"
                src={this.props.currentProduct.image}
                style={{ width: "340px", height: "400px" }}
              />
            </div>
            <div className="row">
              <h5 className="" style={{ fontSize: "40px", marginLeft: "35px" }}>
                Price: <strong>{this.props.currentProduct.price}KWD</strong>
              </h5>
            </div>
            <div className="row">
              <p>
                <button class="btn btn-5 btn-5a icon-cart">Add to cart</button>
              </p>
            </div>
            <div className="row">
              <QuantitySpinner />
            </div>
          </div>
          <div className="col-6 ml-4">
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
    currentProduct: state.rootProduct.currentProduct
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //Syntax
    getProduct: id => dispatch(getProduct(id)),
    resetProduct: () => dispatch({ type: "RESET_PRODUCT" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
