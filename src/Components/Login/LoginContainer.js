import React from "react";
import LoginComponent from "./LoginComponent";

class LoginContainer extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginComponent />
        </div>
      </div>
    );
  }
}

export default LoginContainer;
