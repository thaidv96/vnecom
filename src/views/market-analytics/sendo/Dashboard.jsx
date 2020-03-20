import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar {...this.props} />
        <div className="content">
          <h1>Sendo Dashboard</h1>
        </div>
      </>
    );
  }
}

export default Dashboard;
