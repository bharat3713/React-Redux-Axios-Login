import React from "react";
import { connect } from "react-redux";
import { addAlertMessages } from "../../Application/Actions/AlertMessages";
import PropTypes from "prop-types";

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addAlertMessages({
          type: "error",
          text: "You need to login to access this page"
        });
        this.context.router.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push("/");
      }
    }

    componentDidUpdate() {}

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addAlertMessages: PropTypes.func.isRequired
  };

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(
    mapStateToProps,
    { addAlertMessages }
  )(Authenticate);
}
