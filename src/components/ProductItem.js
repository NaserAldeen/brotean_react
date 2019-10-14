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
                <FontAwesomeIcon icon={faCartArrowDown} />
              </li>
            </ul>
          </div>
          <div className="product-content">
            <h3 className="title">{this.props.product.name}</h3>
            <div className="price">{this.props.product.price}KD</div>
          </div>
        </div>
      </div>
    );
  }
}
