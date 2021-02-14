import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import store from "./store/store";
import firebase from "./firebase";
import { Provider } from "react-redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

const Root = () => {
  const history = useHistory()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Login
        history.push('/');
      
      } else {
        // Logout
        history.push('/login');
      }
    })
  }, [])
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <App />
      </PrivateRoute>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Root />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById("root")
);
