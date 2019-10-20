import React, { Component } from "react";
import ProductItem from "./ProductItem";

import { connect } from "react-redux";
//figma
class ProductList extends Component {
  state = {
    query: ""
  };
  handleSearch = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    let products = this.props.products;

    if (this.props.products) {
      if (this.props.selectedCategory)
        products = products.filter(
          prod => prod.category == this.props.selectedCategory
        );
      if (this.state.query)
        products = products.filter(prod =>
          prod.name.toLowerCase().includes(this.state.query.toLowerCase())
        );
      products = products.map((prod, idx) => (
        <ProductItem key={idx} product={prod} />
      ));
    }
    return (
      <div
        className="container mt-5"
        style={{ fontFamily: "Ubuntu, sans-serif" }}
      >
        <div className="row mb-5">
          <div className="col">
            <h1 className="">
              {this.props.selectedCategory != ""
                ? this.props.selectedCategory
                : "All Products"}
            </h1>
          </div>
          <div className="col">
            <div class="container h-100">
              <div class="d-flex justify-content-center h-100">
                <div class="searchbar">
                  <input
                    class="search_input"
                    type="text"
                    name=""
                    placeholder="Search for products.."
                    onChange={this.handleSearch}
                  />
                  <a href="#" class="search_icon">
                    <i class="fas fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">{products}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.rootProducts.products,
    selectedCategory: state.rootProducts.selectedCategory
  };
};

export default connect(mapStateToProps)(ProductList);
