import React from "react";
import { Route, IndexRoute, withRouter } from "react-router";

import App from "../App/App";
import Home from "../Home/Home";
import SignUp from "../SignUp/signUp";
import LoginContainer from "../Login/LoginContainer";
import Dashboard from "../Dashboard/Dashboard";

import AuthenticationRequired from "../Authentication/AuthenticationRequired";
const EnhancedComponent = withRouter(AuthenticationRequired(Dashboard));
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/dashboard" component={EnhancedComponent} />
  </Route>
);
