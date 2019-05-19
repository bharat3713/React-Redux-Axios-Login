import React from "react";
import NavigationBar from "../Navigation/NavigationBar";
import AlertMessagesGroup from "../AlertMessage/AlertMessagesGroup";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <AlertMessagesGroup />
        {this.props.children}
      </div>
    );
  }
}

export default App;
