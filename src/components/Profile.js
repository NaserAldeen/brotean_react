import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Components
import OrderHistory from "./OrderHistory";
import AddressCard from "./AddressCard";
import AddAddressCard from "./AddAddressCard";

const Profile = props => {
  if (!props.user) return <Redirect to="/login" />;
  if (props.profile !== null) {
    const addressCard = props.profile.addresses.map((address, index) => (
      <AddressCard address={address} key={index} count={index + 1} />
    ));
    return (
      <div className="container my-5">
        <div className="jumbotron mx-3">
          <div className="row">
            <div className="col-3">
              <img className="profile-image" alt="" src={props.profile.image} />
            </div>
            <div className="col my-auto">
              <h2>
                {`${props.profile.user.first_name} ${props.profile.user.last_name}`}
              </h2>
              <h2>{props.profile.user.email}</h2>
            </div>
          </div>
          <div className="row mt-4 mx-5 pl-2">
            <p>
              <b>Gender: </b>
              {props.profile.gender === "M"
                ? "Male"
                : props.profile.gender === "F"
                ? "Female"
                : "Other"}
            </p>
          </div>
          <div className="row mt-4 mx-5 pl-2 text-justify">
            <b>Bio: </b>
            <p>{props.profile.bio}</p>
          </div>

          <hr />
          <h4 className="my-4">Addresses:</h4>
          <div className="row mb-5">
            <AddAddressCard />
            {addressCard}
          </div>
          <hr className="my-4" />
          <OrderHistory orders={props.profile.orders} />
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
