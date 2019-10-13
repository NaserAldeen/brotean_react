import React from "react";
import { Switch, Route } from "react-router-dom";
import RegistationForm from "./components/RegistrationForm";
import { connect } from "react-redux";
import { logout } from "./redux/actions";
function App(props) {
  if (props.user) {
    console.log(props.user);
    return <button onClick={props.logout}>Logout</button>;
  }
  return (
    <div>
      <Switch>
        <Route path="/(login|register)" component={RegistationForm} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
const mapStateToProps = state => {
  return {
    user: state.rootAuth
    // errors: state.errors.response
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
