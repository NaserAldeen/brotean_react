import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../redux/actions/authentication";

class ProfileForm extends Component {
  state = {
    first_name: this.props.profile.user.first_name,
    last_name: this.props.profile.user.last_name,
    email: this.props.profile.user.email,
    bio: this.props.profile.bio
  };

  submitProfile = event => {
    event.preventDefault();
    this.props.updateProfile(this.state);
    this.props.onClose();
  };

  onTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitProfile}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">First Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={this.state.first_name}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={this.state.last_name}
              onChange={this.onTextChange}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">bio</span>
            </div>
            <textarea
              type="text"
              className="form-control"
              name="bio"
              value={this.state.bio}
              onChange={this.onTextChange}
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
    updateProfile: profileObj => dispatch(updateProfile(profileObj))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProfileForm);
