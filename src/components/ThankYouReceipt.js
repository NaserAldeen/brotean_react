import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ThankYouReceipt extends Component {
  render() {
    return (
      <div className="container text-center" style={{ marginTop: "100px" }}>
        <h1>Thank you for your order 🙂</h1>
        <p className="text-muted">Your order number is: #465467</p>
        <Link to="/profile">
          <button className="btn btn-primary btn-sm">View your orders</button>
        </Link>
        <br />
        <br />
        <br />
        <h3>Sit back, relax.. We'll be knocking on your door soon!</h3>
        <br />
      </div>
    );
  }
}
