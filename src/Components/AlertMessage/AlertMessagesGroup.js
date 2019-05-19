import React from "react";
import AlertMessages from "./AlertMessages";
import { connect } from "react-redux";
import { deleteAlertMessages } from "../../Application/Actions/AlertMessages";
import PropTypes from "prop-types";

class AlertMessagesGroup extends React.Component {
  render() {
    const messages = this.props.messages.map(message => (
      <AlertMessages
        key={message.id}
        message={message}
        deleteAlertMessages={this.props.deleteAlertMessages}
      />
    ));
    return <div>{messages}</div>;
  }
}

AlertMessagesGroup.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteAlertMessages: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.alertMessages
  };
}

export default connect(
  mapStateToProps,
  { deleteAlertMessages }
)(AlertMessagesGroup);
