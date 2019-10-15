import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
class ProductList extends Component {
  render() {
    let products;
    if (this.props.products)
      products = this.props.products.map((prod, idx) => (
        <ProductItem key={idx} product={prod} />
      ));
    return (
      <div
        className="container mt-5"
        style={{ fontFamily: "Ubuntu, sans-serif" }}
      >
        <div class="row">{products}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.rootProducts.products
  };
};
export default connect(mapStateToProps)(ProductList);
