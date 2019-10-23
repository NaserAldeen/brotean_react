import React from "react";
import { connect } from "react-redux";
import { checkout } from "../redux/actions";
import $ from "jquery";
import { updateProfile, updateCreateAddress } from "../redux/actions";

class Checkout extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    phone: "",
    governate: "",
    area: "",
    block: "",
    street: "",
    additional_address: "",
    email: "",
    loadedInfo: false,
    editedProfile: false,
    editedAddress: false,
    selectedAddress: -1
  };
  componentDidUpdate() {
    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;

    $(".next").click(function() {
      if (animating) return false;

      animating = true;

      current_fs = $(this).parent();
      next_fs = $(this)
        .parent()
        .next();

      $("#progressbar li")
        .eq($("fieldset").index(next_fs))
        .addClass("active");

      next_fs.show();

      current_fs.animate(
        { opacity: 0 },
        {
          step: function(now, mx) {
            scale = 1 - (1 - now) * 0.2;

            left = now * 50 + "%";

            opacity = 1 - now;
            current_fs.css({
              transform: "scale(" + scale + ")",
              position: "absolute"
            });
            next_fs.css({ left: left, opacity: opacity });
          },
          duration: 800,
          complete: function() {
            current_fs.hide();
            animating = false;
          }
        }
      );
    });

    $(".previous").click(function() {
      if (animating) return false;
      animating = true;

      current_fs = $(this).parent();
      previous_fs = $(this)
        .parent()
        .prev();

      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      previous_fs.show();

      current_fs.animate(
        { opacity: 0 },
        {
          step: function(now, mx) {
            scale = 0.8 + (1 - now) * 0.2;

            left = (1 - now) * 50 + "%";

            opacity = 1 - now;
            current_fs.css({ left: left });
            previous_fs.css({
              transform: "scale(" + scale + ")",
              opacity: opacity
            });
          },
          duration: 800,
          complete: function() {
            current_fs.hide();
            animating = false;
          }
        }
      );
    });
  }
  handleSelectChange = e => {
    this.setState({
      selectedAddress: e.target.value,
      loadedInfo: false
    });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ editedAddress: true });
  };
  handleChangeProfile = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ editedProfile: true });
  };
  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.editedProfile) {
      this.props.updateProfile({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email
      });
    }
    if (this.state.editedAddress) {
      if (this.state.selectedAddress == -1)
        this.props.updateCreateAddress({
          governate: this.state.governate,
          area: this.state.area,
          block: this.state.block,
          street: this.state.street,
          additional_address: this.state.additional_address,
          phone_number: this.state.phone
        });
      else
        this.props.updateCreateAddress({
          id: this.state.selectedAddress,
          governate: this.state.governate,
          area: this.state.area,
          block: this.state.block,
          street: this.state.street,
          additional_address: this.state.additional_address,
          phone_number: this.state.phone
        });
    }

    this.setState({
      editedAddress: false,
      editedProfile: false
    });
    if (this.state.selectedAddress != -1)
      this.props.checkout(this.state.selectedAddress);
    else {
      const newAddress = this.props.profile.addresses[
        this.props.profile.addresses.length - 1
      ];

      this.props.checkout(newAddress.id + 1);
    }

    this.props.history.replace("/order-complete");
  };
  render() {
    if (!this.props.profile) return <h2>Loading..</h2>;

    if (!this.state.loadedInfo) {
      let address;
      if (this.state.selectedAddress == -1) {
        this.setState({
          first_name: this.props.profile.user.first_name,
          last_name: this.props.profile.user.last_name,
          email: this.props.profile.user.email,

          loadedInfo: true
        });
      } else {
        address = this.props.profile.addresses.find(
          add => add.id == this.state.selectedAddress
        );
        this.setState({
          phone: address.phone_number,

          governate: address.governate,
          area: address.area,
          block: address.block,
          street: address.street,
          additional_address: address.additional_address,

          loadedInfo: true
        });
      }
    }

    return (
      <div className="container mt-5 text-center">
        <div
          className="jumbotron bg-dark mx-auto"
          style={{ width: "90%", minHeight: "800px" }}
        >
          <div className="row">
            <div className="col-md-6">
              <form
                id="msform"
                className="container-fluid"
                style={{ width: "900px" }}
                onSubmit={this.handleSubmit}
              >
                <ul id="progressbar">
                  <li className="active">Personal Details</li>
                  <li>Delivery Address</li>
                  <li>Payment</li>
                </ul>

                <fieldset style={{ borderRadius: "15px" }}>
                  <h2 className="fs-title mt-3">Personal Details</h2>
                  <h3 className="fs-subtitle">
                    Please verify your information
                  </h3>
                  <label for="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    ref="firstName"
                    value={this.state.first_name}
                    onChange={e => this.handleChangeProfile(e)}
                  />
                  <label for="last_name">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={e => this.handleChangeProfile(e)}
                  />
                  <label for="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.handleChangeProfile(e)}
                  />

                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value="Next"
                    disabled={
                      this.state.email.trim() == "" ||
                      this.state.first_name.trim() == "" ||
                      this.state.last_name.trim() == ""
                        ? true
                        : false
                    }
                  />
                </fieldset>
                <fieldset style={{ borderRadius: "15px" }}>
                  <h2 className="fs-title mt-3">Delivery Address</h2>
                  <h3 className="fs-subtitle">
                    Please specify a delivery address
                  </h3>

                  <select
                    className="custom-select mb-4"
                    onChange={this.handleSelectChange}
                  >
                    <option selected value={-1}>
                      Create a new address
                    </option>
                    {this.props.profile.addresses.map(add => (
                      <option value={add.id}>
                        {add.governate}, {add.area}, {add.block}, {add.street}
                      </option>
                    ))}
                  </select>

                  <div className="row">
                    <div className="col">
                      <label for="governate">Governate</label>
                      <input
                        type="text"
                        name="governate"
                        placeholder="Governate"
                        value={this.state.governate}
                        required
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="col">
                      <label for="area">Area</label>
                      <input
                        type="text"
                        name="area"
                        placeholder="Area"
                        value={this.state.area}
                        required
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label for="block">Block</label>
                      <input
                        type="text"
                        name="block"
                        placeholder="Block"
                        value={this.state.block}
                        required
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="col">
                      <label for="street">Street</label>
                      <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={this.state.street}
                        required
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>

                  <label for="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={this.state.phone}
                    required
                    onChange={e => this.handleChange(e)}
                  />

                  <label for="additional_address">Extra Directions</label>
                  <textarea
                    type="text"
                    name="additional_address"
                    placeholder="Additional address.."
                    value={this.state.additional_address}
                    onChange={e => this.handleChange(e)}
                  />

                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    value="Previous"
                  />
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value="Next"
                    disabled={
                      this.state.governate.trim() == "" ||
                      this.state.area.trim() == "" ||
                      this.state.block.trim() == "" ||
                      this.state.street.trim() == ""
                        ? true
                        : false
                    }
                  />
                </fieldset>
                <fieldset style={{ borderRadius: "15px" }}>
                  <h2 className="fs-title mt-3">Payment</h2>
                  <h3 className="fs-subtitle">Select a payment method</h3>

                  <div
                    className="container"
                    style={{ padding: "2rem 0rem", marginLeft: "100px" }}
                    className="text-justify"
                  >
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="custom-control-input"
                        checked
                      />
                      <label
                        className="custom-control-label"
                        for="customRadio1"
                      >
                        KNET
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        for="customRadio2"
                      >
                        Pay on Delivery
                      </label>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    value="Previous"
                  />

                  <input
                    type="submit"
                    name="submit"
                    className="submit action-button"
                    value="Place order!"
                    disabled={this.state.email.trim() == "" ? true : false}
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.rootCart.userProfile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkout: address_id => dispatch(checkout(address_id)),
    updateProfile: obj => dispatch(updateProfile(obj)),
    updateCreateAddress: obj => dispatch(updateCreateAddress(obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
