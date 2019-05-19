import React from "react";
import { connect } from "react-redux";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <h2 className="container text-center">
        Hello<b> {this.props.auth.user.userId}</b> your New Token is
        <b> {this.props.auth.user.token}</b>
      </h2>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  null
)(Dashboard);
