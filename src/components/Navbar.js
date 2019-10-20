import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../redux/actions";
import ShoppingCart from "./ShoppingCart";
import CategoriesDropdown from "./CategoriesDropdown";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">
            <span className="navbar-brand">Brotean</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  <span
                    className="nav-link"
                    onClick={() => this.props.resetCategory("")}
                  >
                    Home <span className="sr-only">(current)</span>
                  </span>
                </Link>
              </li>
              {!this.props.user ? (
                <li className="nav-item">
                  <Link to="/login">
                    <span className="nav-link">Login</span>
                  </Link>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <span
                    className="nav-link active dropdown-toggle pointer"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.props.user.username}
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <span className="dropdown-item pointer">Profile</span>
                    <span className="dropdown-item pointer">Order History</span>
                    <div className="dropdown-divider pointer"></div>
                    <span
                      className="dropdown-item pointer"
                      onClick={() => this.props.logout()}
                    >
                      Logout
                    </span>
                  </div>
                </li>
              )}

              <li className="nav-item dropdown">
                <CategoriesDropdown />
              </li>
            </ul>

            {this.props.user ? <ShoppingCart /> : null}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.rootAuth,
    products: state.rootProducts.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    resetCategory: cat => dispatch({ type: "SET_CATEGORY", payload: cat })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
