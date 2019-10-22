import React, { Component } from "react";
import Modal from "react-responsive-modal";

// Components
import AddressForm from "./AddressForm";

class AddressCard extends Component {
  state = {
    deleted: false,
    open: false
  };

  onOpenModal = () => this.setState({ open: true });

  onCloseModal = () => this.setState({ open: false });

  render() {
    const { address, count } = this.props;
    if (!this.state.deleted) {
      return (
        <div className="col-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                Address #{count} ({address.governate}):
              </h5>
              <p className="card-text">
                {address.area}, Block {address.block},
                <br /> {address.street}
                <br /> +965 {address.phone_number}
              </p>
              <p>Extra Directions:</p>
              <p className="card-text">{address.additional_address}</p>
              <Modal open={this.state.open} onClose={this.onCloseModal} center>
                <AddressForm address={address} onClose={this.onCloseModal} />
              </Modal>
              <span
                className="card-link pointer"
                style={{ color: "blue", textDecoration: "underline" }}
                onClick={this.onOpenModal}
              >
                Edit
              </span>
              <span
                className="card-link pointer"
                style={{ color: "blue", textDecoration: "underline" }}
                onClick={() => this.setState({ deleted: true })}
              >
                Delete
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AddressCard;
