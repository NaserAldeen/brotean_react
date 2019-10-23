import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { connect } from "react-redux";
import { authorization } from "../redux/actions";

class Authentication extends Component {
  state = {
    modal: false,
    type: true, //true for login, false for signup,
    user: { username: "", password: "" }
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  changeType = () => {
    this.setState({ type: !this.state.type });
  };

  changeHandler = e => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.authorization(
      this.state.user,
      this.state.type ? "login" : "register"
    );
  };

  render() {
    return (
      <MDBContainer>
        {/* BUTTON */}
        <MDBBtn color="info" onClick={this.toggle}>
          Login
        </MDBBtn>
        {/* MODAL */}
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          position="right"
        >
          <MDBModalHeader toggle={this.toggle}>
            {this.state.type ? "Login" : "Sign up"}
          </MDBModalHeader>
          <MDBModalBody>
            <form onSubmit={this.submitHandler}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="username"
                  onChange={this.changeHandler}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={this.changeHandler}
                />
              </div>

              <button type="submit" class="btn btn-primary mb-4">
                {this.state.type ? "Login" : "Sign up"}
              </button>
            </form>
            <a href="#" onClick={() => this.changeType()}>
              {this.state.type
                ? "Don't have an account? Sign up"
                : "Have an account? Log in"}
            </a>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.rootAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authorization: (userData, type, history) =>
      dispatch(authorization(userData, type, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
