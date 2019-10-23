import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import ProductItem from "./ProductItem";
import LoadingSpinner from "./LoadingSpinner";

class ProductList extends Component {
  state = {
    query: ""
  };
  handleSearch = e => {
    this.setState({ query: e.target.value });
  };
  renderTitle = () => {
    let category = this.props.selectedCategory;
    let brand = this.props.selectedBrand;
    if (!category && !brand) return "All Products";
    else if (!category && brand) return brand;
    else if (category && !brand) return category;
    else if (category && brand) return brand + " - " + category;
  };
  render() {
    let products = this.props.products;

    if (this.props.products) {
      if (this.props.selectedBrand)
        products = products.filter(
          prod => prod.manufacturer == this.props.selectedBrand
        );

      if (this.props.selectedCategory)
        products = products.filter(
          prod => prod.category == this.props.selectedCategory
        );

      if (this.state.query)
        products = products.filter(
          prod =>
            prod.name.toLowerCase().includes(this.state.query.toLowerCase()) ||
            prod.category
              .toLowerCase()
              .includes(this.state.query.toLowerCase()) ||
            prod.manufacturer
              .toLowerCase()
              .includes(this.state.query.toLowerCase())
        );
      products = products.map((prod, idx) => (
        <ProductItem key={idx} product={prod} />
      ));
    } else return <h2>Loading</h2>;
    return (
      <div
        className="container mt-5"
        style={{ fontFamily: "Ubuntu, sans-serif" }}
      >
        <div className="row mb-5">
          <div className="col">
            <h1 className="">{this.renderTitle()}</h1>
            <hr />
          </div>
          <div className="col">
            <div className="container h-100">
              <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                  <input
                    className="search_input"
                    type="text"
                    name=""
                    placeholder="Search for products.."
                    onChange={this.handleSearch}
                  />
                  <a href="#" className="search_icon">
                    <i className="fas fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {products.length ? (
            products
          ) : !(
              this.props.selectedBrand ||
              this.props.selectedCategory ||
              this.state.query
            ) ? (
            <div className="container mt-5 text-center justify-content-center w-100">
              <LoadingSpinner />
            </div>
          ) : (
            <h2 className="mt-5 text-muted">Couldn't find anything</h2>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.rootProducts.products,
    selectedCategory: state.rootProducts.selectedCategory,
    selectedBrand: state.rootProducts.selectedBrand
  };
};

export default connect(mapStateToProps)(ProductList);
