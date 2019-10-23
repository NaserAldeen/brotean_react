import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCreateAddress } from "../redux/actions/authentication";

class AddressForm extends Component {
  state = {
    ...this.props.address
  };

  submitAddress = event => {
    event.preventDefault();
    this.props.updateCreateAddress(this.state);
    this.props.onClose();
  };

  onTextchange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitAddress}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Governate</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="governate"
              value={this.state.governate}
              onChange={this.onTextchange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Area</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="area"
              value={this.state.area}
              onChange={this.onTextchange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Block</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="block"
              value={this.state.block}
              onChange={this.onTextchange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Street</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="street"
              value={this.state.street}
              onChange={this.onTextchange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Phone Number</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="phone_number"
              value={this.state.phone_number}
              onChange={this.onTextchange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Extra Directions</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="additional_address"
              value={this.state.additional_address}
              onChange={this.onTextchange}
            />
          </div>
          <input className="btn btn-success" type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCreateAddress: addressObj => dispatch(updateCreateAddress(addressObj))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddressForm);
