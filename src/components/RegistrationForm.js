import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authorization } from "../redux/actions";

//Implement errors n shit

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

class RegistationForm extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.authorization(
      this.state,
      this.props.match.url.substring(1),
      this.props.history
    );
  };
  render() {
    const type = this.props.match.url.substring(1);
    return (
      <MDBContainer className="mt-5">
        <MDBRow className="mx-auto">
          <MDBCol md="6" className="mx-auto">
            <MDBCard className="mx-auto">
              <MDBCardBody>
                <MDBCardHeader
                  className="form-header deep-blue-gradient rounded text-center mb-5"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                >
                  <h3 className="my-3">
                    <MDBIcon icon="lock" />{" "}
                    {type === "login" ? "Login" : "Register"}
                  </h3>
                </MDBCardHeader>
                <form onSubmit={this.submitHandler}>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your username"
                      icon="user"
                      group
                      type="username"
                      error="wrong"
                      success="right"
                      name="username"
                      className="mb-5"
                      onChange={this.changeHandler}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                      onChange={this.changeHandler}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="light-blue"
                      className="mb-3"
                      type="submit"
                      style={{
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                      }}
                    >
                      {type === "login" ? "Login" : "Register"}
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <Link
                      to={type === "login" ? "/register" : "/login"}
                      className="btn btn-small btn-link"
                    >
                      {type === "login"
                        ? "register an account"
                        : "login with an existing account"}
                    </Link>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
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
)(RegistationForm);

