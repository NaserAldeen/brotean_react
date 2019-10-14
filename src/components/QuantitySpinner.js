import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
export default class QuantitySpinner extends Component {
  state = {
    number: 0
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div class="input-group " style={{ width: "70px", marginLeft: "120px" }}>
        <p>Quantity </p>
        <input
          class="text-center form-control"
          type="number"
          name="number"
          value={this.state.number}
          onChange={e => this.handleChange(e)}
        />
      </div>
    );
  }
}
