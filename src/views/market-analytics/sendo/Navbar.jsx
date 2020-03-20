import React, { Component } from "react";
import MarketAnalyticsNavbar from "components/Navbars/MarketAnalyticsNavbar";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <MarketAnalyticsNavbar {...this.props}>
        <h3 style={{ color: "black", display: "inline" }}>Sendo Filter</h3>
      </MarketAnalyticsNavbar>
    );
  }
}

export default Navbar;
