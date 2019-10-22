import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItemToCart } from "../redux/actions";
import { showAlert } from "../redux/actions/alerts";

//Add more stuff to the product cart (maybe manufacturer)

class ProductItem extends Component {
  handlePress(e) {}
  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-4">
        <div
          className="product-grid3"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
          <div className="product-image3">
            <Link to={`products/${this.props.product.id}`}>
              <span onClick={() => this.handlePress()}>
                <img className="pic-1" alt="" src={this.props.product.image} />
                <img className="pic-2" alt="" src={this.props.product.image} />
              </span>
            </Link>
            <ul className="social">
              <li
                onClick={() => {
                  if (!this.props.user) {
                    this.props.alert("Login to add items to your cart");
                    return;
                  }
                  this.props.addItemToCart(this.props.product.id, 1);
                  this.props.alert(
                    `Added ${this.props.product.name} to your cart!`
                  );
                }}
              >
                <a href="#">
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </a>
              </li>
            </ul>
          </div>
          <div className="product-content">
            <h3 className="">{this.props.product.name}</h3>
            <div className="price">
              {Math.floor(this.props.product.price) == this.props.product.price
                ? parseFloat(this.props.product.price)
                : this.props.product.price}
              KWD
            </div>
            <div
              className={
                this.props.product.quantity > 0 ? "text-muted" : "text-danger"
              }
            >
              {this.props.product.quantity > 0 ? "In stock" : "SOLD OUT"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.rootAuth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: (product_id, quantity) =>
      dispatch(addItemToCart(product_id, quantity)),
    alert: content => dispatch(showAlert(content))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
