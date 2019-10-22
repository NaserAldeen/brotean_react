import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class BrandsDropdown extends Component {
  render() {
    const brandsList = this.props.brands.map(brand => (
      <button
        class="dropdown-item"
        type="button"
        onClick={() => this.props.setBrand(brand.name)}
      >
        <Link to="/">{brand.name}</Link>
      </button>
    ));
    return (
      <div>
        <div class="dropdown">
          <span
            className="nav-link active dropdown-toggle pointer"
            id="dropdownMenu"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Brands
          </span>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuMenu">
            <button
              class="dropdown-item"
              type="button"
              onClick={() => this.props.setBrand("")}
            >
              <Link to="/">All Brands</Link>
            </button>
            <div className="dropdown-divider pointer"></div>
            {brandsList}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    brands: state.rootProducts.brands
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setBrand: brand => dispatch({ type: "SET_BRAND", payload: brand })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandsDropdown);
