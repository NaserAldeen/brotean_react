import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CategoriesDropdown extends Component {
  render() {
    const categoriesList = this.props.categories.map((cat, idx) => (
      <button
        className="dropdown-item"
        type="button"
        key={idx}
        onClick={() => this.props.setCategory(cat.name)}
      >
        <Link to="/">{cat.name}</Link>
      </button>
    ));
    return (
      <div>
        <div className="dropdown">
          <span
            className="nav-link active dropdown-toggle pointer"
            id="dropdownMenu"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories
          </span>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuMenu">
            <button
              className="dropdown-item"
              type="button"
              onClick={() => this.props.setCategory("")}
            >
              <Link to="/">All Products</Link>
            </button>
            <div className="dropdown-divider pointer"></div>
            {categoriesList}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.rootProducts.categories
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCategory: cat => dispatch({ type: "SET_CATEGORY", payload: cat })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesDropdown);
