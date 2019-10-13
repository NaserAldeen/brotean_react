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
      <div>
        <h1>{this.props.currentProduct.name}</h1>
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
