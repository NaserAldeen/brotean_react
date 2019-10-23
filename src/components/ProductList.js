import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import ProductItem from "./ProductItem";
import LoadingSpinner from "./LoadingSpinner";

class ProductList extends Component {
  state = {
    query: "",
    filteredCategory: [],
    filteredBrand: []
  };
  handleSearch = e => {
    this.setState({ query: e.target.value });
  };

  handleSwitchCategory = e => {
    if (e.target.checked) {
      this.setState({
        filteredCategory: [...this.state.filteredCategory.concat(e.target.name)]
      });
    } else {
      const newArray = this.state.filteredCategory.filter(
        cat => cat != e.target.name
      );
      this.setState({
        filteredCategory: [...newArray]
      });
    }
  };

  handleSwitchBrand = e => {
    if (e.target.checked) {
      this.setState({
        filteredBrand: [...this.state.filteredBrand.concat(e.target.name)]
      });
    } else {
      const newArray = this.state.filteredBrand.filter(
        cat => cat != e.target.name
      );
      this.setState({
        filteredBrand: [...newArray]
      });
    }
  };

  render() {
    let products = this.props.products;
    let cats;
    let brands;
    if (this.props.products) {
      if (this.state.filteredBrand.length)
        products = products.filter(prod =>
          this.state.filteredBrand.includes(prod.manufacturer)
        );
      if (this.state.filteredCategory.length)
        products = products.filter(prod =>
          this.state.filteredCategory.includes(prod.category)
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

      cats = this.props.categories.map(cat => {
        return (
          <li class="list-group-item ">
            {cat.name}
            <div class="custom-control custom-switch float-right">
              <input
                type="checkbox"
                class="custom-control-input"
                id={`customSwitch${cat.id}`}
                name={cat.name}
                value="true"
                onChange={this.handleSwitchCategory}
              />
              <label
                class="custom-control-label"
                for={`customSwitch${cat.id}`}
              ></label>
            </div>
          </li>
        );
      });
      brands = this.props.brands.map(cat => {
        return (
          <li class="list-group-item ">
            {cat.name}
            <div class="custom-control custom-switch float-right">
              <input
                type="checkbox"
                class="custom-control-input"
                id={cat.name}
                value="true"
                name={cat.name}
                onChange={this.handleSwitchBrand}
              />
              <label class="custom-control-label" for={cat.name}></label>
            </div>
          </li>
        );
      });
    } else return <h2>Loading</h2>;
    return (
      <div className="mt-5" style={{ fontFamily: "Ubuntu, sans-serif" }}>
        <div className="row">
          <div
            className="col-2 rounded mt-5 ml-1"
            style={{
              padding: 0
            }}
          >
            <ul className="list-group" name="categories-list">
              <li
                class="list-group-item bg-dark text-light"
                style={{ height: "25px", fontSize: "14px", paddingTop: 1 }}
              >
                Categories
              </li>
              {cats}

              <li
                class="list-group-item bg-dark text-light"
                style={{ height: "25px", fontSize: "14px", paddingTop: 1 }}
              >
                Brands
              </li>
              {brands}
            </ul>
          </div>
          <div className="col-9 ml-4">
            <div className="row mb-5">
              <div className="col">
                <h1 className="">All Products</h1>
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
                  this.state.filteredBrand.length ||
                  this.state.filteredCategory.length ||
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.rootProducts.products,
    brands: state.rootProducts.brands,
    categories: state.rootProducts.categories
  };
};

export default connect(mapStateToProps)(ProductList);
