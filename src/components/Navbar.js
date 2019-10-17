import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions";
import ShoppingCart from "./ShoppingCart";

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
                  <span className="nav-link">
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
                    <Link to="/profile">
                      <span className="dropdown-item pointer">Profile</span>
                    </Link>
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
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 mr-2"
                type="submit"
              >
                Search
              </button>
              {this.props.user && this.props.products.length ? (
                <ShoppingCart />
              ) : null}
            </form>
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
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
