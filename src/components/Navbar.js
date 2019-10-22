import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../redux/actions";
import ShoppingCart from "./ShoppingCart";
import CategoriesDropdown from "./CategoriesDropdown";
import BrandsDropdown from "./BrandsDropdown";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/">
            <span
              className="navbar-brand"
              onClick={() => {
                this.props.resetCategory("");
                this.props.resetBrand("");
              }}
              v
            >
              Brotean
            </span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  <span
                    className="nav-link"
                    onClick={() => {
                      this.props.resetCategory("");
                      this.props.resetBrand("");
                    }}
                  >
                    Home <span className="sr-only">(current)</span>
                  </span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <CategoriesDropdown />
              </li>
              <li className="nav-item dropdown">
                <BrandsDropdown />
              </li>
            </ul>

            {!this.props.user ? (
              <div className="nav-item">
                <Link to="/login">
                  <span className="nav-link">Login</span>
                </Link>
              </div>
            ) : (
              <div className="nav-item dropdown mr-3">
                <span
                  className="nav-link active pointer text-white"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    background: "#33b5e6",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    verticalAlign: "middle",
                    paddingRight: "29px"
                  }}
                >
                  {this.props.user.username[0].toUpperCase()}
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <span className="dropdown-item pointer">
                    <Link
                      style={{ padding: 0, fontSize: "16px" }}
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </span>
                  <div className="dropdown-divider pointer"></div>
                  <span
                    className="dropdown-item pointer"
                    onClick={() => this.props.logout()}
                  >
                    Logout
                  </span>
                </div>
              </div>
            )}
            {this.props.user ? <ShoppingCart /> : null}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.rootAuth.user,
    products: state.rootProducts.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    resetCategory: cat => dispatch({ type: "SET_CATEGORY", payload: cat }),
    resetBrand: brand => dispatch({ type: "SET_BRAND", payload: brand })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
