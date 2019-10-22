import React, { Component } from "react";
import Modal from "react-responsive-modal";

// Components
import AddressForm from "./AddressForm";

export default class AddAddressCard extends Component {
  state = {
    open: false
  };

  onOpenModal = () => this.setState({ open: true });

  onCloseModal = () => this.setState({ open: false });

  render() {
    return (
      <div className="col mb-3">
        <div>
          <Modal open={this.state.open} onClose={this.onCloseModal} center>
            <AddressForm
              address={{
                governate: "",
                area: "",
                block: "",
                street: "",
                phone_number: "",
                additional_address: ""
              }}
              onClose={this.onCloseModal}
            />
          </Modal>
        </div>
        <div className="card h-100" onClick={this.onOpenModal}>
          <div className="image mx-auto my-auto pointer">
            <img
              className="card-img-top img-fluid"
              src="https://mbtskoudsalg.com/images/a-plus-png-2.png"
              alt="+"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
