import React from "react";
import 'semantic-ui-css/semantic.min.css'
import firebase from "./firebase"
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signup from "./components/auth/Signup"
import Login from "./components/auth/Login"

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <Root />,

  document.getElementById("root")
);
