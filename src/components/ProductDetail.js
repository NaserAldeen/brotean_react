import React, { Component } from "react";
import { getProduct } from "../redux/actions";
import { connect } from "react-redux";
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
          <div className="col-4">
            <img
              className="mt-5"
              src={this.props.currentProduct.image}
              alt=""
              style={{ width: "340px", height: "400px" }}
            />
          </div>
          <div className="col-6">
            <h1 className="">{this.props.currentProduct.name}</h1>
            <p className="mb-4 text-muted">
              {this.props.currentProduct.manufacturer ? "By: " : null}
              {this.props.currentProduct.manufacturer}
            </p>
            <p className="text-justify" style={{ lineHeight: "2" }}>
              {this.props.currentProduct.description}
            </p>
            <h5>
              Price: <strong>{this.props.currentProduct.price}KWD</strong>
            </h5>
            <p>
              <button className="btn btn-5 btn-5a icon-cart">
                Add to cart
              </button>
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
