import React, { Component } from "react";
import Modal from "react-responsive-modal";

// Components
import ProfileForm from "./ProfileForm";

export default class ProfileModal extends Component {
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
            <ProfileForm
              profile={this.props.profile}
              onClose={this.onCloseModal}
            />
          </Modal>
        </div>
        <button className="btn btn-danger" onClick={this.onOpenModal}>
          Edit Profile
        </button>
      </div>
    );
  }
}
