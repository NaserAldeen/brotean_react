import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../redux/actions";

class NavCartItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-3">
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

export default connect(
  null,
  mapDispatchToProps
)(NavCartItem);
