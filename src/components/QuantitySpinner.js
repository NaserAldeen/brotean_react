import React, { Component } from "react";
import { connect } from "react-redux";
class QuantitySpinner extends Component {
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.props.setSpinnerValue(e.target.value);
  }
  componentWillUnmount() {
    this.props.setSpinnerValue(1);
  }
  render() {
    return (
      <div
        class="input-group "
        style={{ width: "70px", marginLeft: "120px", marginBottom: "50px" }}
      >
        <p>Quantity </p>
        <input
          class="text-center form-control"
          type="number"
          name="number"
          value={this.props.number}
          onChange={e => this.handleChange(e)}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    number: state.UI.spinnerCount
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setSpinnerValue: value => dispatch({ type: "SET_SPINNER", payload: value })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuantitySpinner);
