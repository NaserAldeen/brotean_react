import React, { Component } from "react";

export default class NavCartItem extends Component {
  render() {
    console.log(this.props.product);
    return (
      <li>
        <span class="item">
          <span class="item-left">
            <img
              src={this.props.product.image}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <span class="item-info">
              <span>{this.props.product.name}</span>
              <span>
                {this.props.quantity} x {this.props.product.price} KWD ={" "}
                {this.props.quantity * this.props.product.price} KWD
              </span>
            </span>
          </span>
          <span class="item-right">
            <button class="btn btn-sm btn-danger float-xs-right">x</button>
          </span>
        </span>
      </li>
    );
  }
}
