import React from "react";
import { Switch, Route } from "react-router-dom";
import RegistationForm from "./components/RegistrationForm";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/(login|register)" component={RegistationForm} />
      </Switch>
    </div>
  );
}

export default App;
