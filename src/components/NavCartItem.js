import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
class NavCartItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img
              src={this.props.product.image}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col">{this.props.product.item}</div>
            </div>
            <div className="row">
              <div className="col">
                {this.props.product.quantity} x {this.props.product.price} KWD ={" "}
                {this.props.product.quantity * this.props.product.price} KWD
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="row">
              <div className="col">
                <a
                  onClick={e => {
                    this.props.addItemToCart(this.props.product.product_id, 1);
                  }}
                  style={{ width: "20px" }}
                >
                  <FontAwesomeIcon icon={faPlusCircle} />
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <a
                  onClick={e => {
                    this.props.addItemToCart(this.props.product.product_id, -1);
                  }}
                  style={{ width: "20px" }}
                >
                  <FontAwesomeIcon icon={faMinusCircle} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-sm btn-danger float-xs-right"
              onClick={e => {
                this.props.addItemToCart(this.props.product.product_id, 0);
              }}
            >
              x
            </button>
          </div>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: (product_id, quantity) =>
      dispatch(addItemToCart(product_id, quantity))
  };
};
const mapStateToProps = state => {
  return {
    cart: state.rootCart.cart
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavCartItem);
