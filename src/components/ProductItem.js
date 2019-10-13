import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faCartArrowDown
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default class ProductItem extends Component {
  handlePress(e) {}
  render() {
    return (
      <div class="col-md-3 col-sm-6">
        <div class="product-grid3">
          <div class="product-image3">
            <Link to={`${this.props.product.id}`}>
              <a onClick={() => this.handlePress()}>
                <img class="pic-1" src={this.props.product.image} />
                <img class="pic-2" src={this.props.product.image} />
              </a>
            </Link>
            <ul class="social">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </a>
              </li>
            </ul>
          </div>
          <div class="product-content">
            <h3 class="title">
              <a href="#">{this.props.product.name}</a>
            </h3>
            <div class="price">{this.props.product.price}KD</div>
          </div>
        </div>
      </div>
    );
  }
}
