import React from "react";
import { connect } from "react-redux";
import { checkout } from "../redux/actions";
import $ from "jquery";
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
    email: ""
  };
  componentDidMount() {
    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;

    $(".next").click(function() {
      //   if (!this.refs.firstName) return;
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
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange2 = () => {};
  render() {
    return (
      <div className="container mt-5 text-center">
        <div
          className="jumbotron bg-dark mx-auto"
          style={{ width: "90%", minHeight: "650px" }}
        >
          <div className="row">
            <div className="col-md-6">
              <form
                id="msform"
                className="container-fluid"
                style={{ width: "900px" }}
                onSubmit={e => {
                  this.props.checkout();
                  alert("fds");
                }}
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
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={e => this.handleChange(e)}
                  />
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        ref="firstName"
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={e => this.handleChange(e)}
                  />
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value="Next"
                    disabled={
                      this.state.email.trim() == "" ||
                      this.state.first_name.trim() == "" ||
                      this.state.last_name.trim() == "" ||
                      this.state.phone.trim() == ""
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
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        name="governate"
                        placeholder="Governate"
                        required
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="area"
                        placeholder="Area"
                        required
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        name="block"
                        placeholder="Block"
                        required
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        required
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <textarea
                    type="text"
                    name="additional_address"
                    placeholder="Additional address.."
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
                    class="container"
                    style={{ padding: "2rem 0rem", marginLeft: "100px" }}
                    className="text-justify"
                  >
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        class="custom-control-input"
                        checked
                      />
                      <label class="custom-control-label" for="customRadio1">
                        KNET
                      </label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio2">
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
                    onClick={() => alert("fds")}
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
const mapDispatchToProps = dispatch => {
  return {
    checkout: () => dispatch(checkout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Checkout);
