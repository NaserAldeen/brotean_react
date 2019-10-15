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
      <div className="col-md-3 col-sm-6">
        <div className="product-grid3">
          <div className="product-image3">
            <Link to={`products/${this.props.product.id}`}>
              <span onClick={() => this.handlePress()}>
                <img className="pic-1" alt="" src={this.props.product.image} />
                <img className="pic-2" alt="" src={this.props.product.image} />
              </span>
            </Link>
            <ul className="social">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </a>
              </li>
            </ul>
          </div>
          <div class="product-content">
            <h3 class="title">{this.props.product.name}</h3>
            <div class="price">{this.props.product.price}KWD</div>
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
