import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Components
import OrderRow from "./OrderRow";

const Profile = props => {
  if (!props.user) return <Redirect to="/login" />;
  if (props.profile !== null) {
    const orderRows = props.profile.orders.map((order, index) => (
      <OrderRow key={index} index={index} order={order} />
    ));
    return (
      <div className="container my-3">
        <div className="jumbotron">
          <div className="mx-3">
            <div className="row">
              <div className="col-3">
                <img
                  style={{
                    display: "inline-block",
                    position: "relative",
                    width: "200px",
                    height: "200px",
                    overflow: "hidden",
                    borderRadius: "50%",
                    borderStyle: "solid"
                  }}
                  alt=""
                  src={props.profile.image}
                />
              </div>
              <div className="col my-auto">
                <h2>
                  {`${props.profile.user.first_name} ${props.profile.user.last_name}`}
                </h2>
                <h2>@{props.user.username}</h2>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col" style={{ paddingLeft: 0 }}>
                <p>
                  <b>Phone Number: </b>
                  {props.profile.phone_number}
                </p>
              </div>
              <div className="col">
                <p>
                  <b>Gender: </b>
                  {props.profile.gender === "M" ? "Male" : "Female"}
                </p>
              </div>
              <div className="col">
                <p>
                  <b>Email: </b>
                  {props.profile.user.email}
                </p>
              </div>
            </div>
          </div>
          <b>Address:</b>
          <p></p>
          <b className="my-2">Bio:</b>
          <p>{props.profile.bio}</p>
          <h5 className="text-center mt-3">Order History</h5>
          <table className="mt-1 table text-center">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Ship To</th>
                <th>Total</th>
                <th>Order Details</th>
              </tr>
            </thead>
            <tbody>{orderRows}</tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

const mapStateToProps = state => {
  return {
    user: state.rootAuth.user,
    profile: state.rootAuth.userProfile
  };
};

export default connect(mapStateToProps)(Profile);
