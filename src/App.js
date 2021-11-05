import React, { Component } from "react";
import "./App.css";
import UserProfile from "./components/users/UserProfile";


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <UserProfile />
      </React.Fragment>
    );
  }
}

export default App;
