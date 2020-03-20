import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth/Auth.jsx";
import { default as MarketAnalyticsLayout } from "views/market-analytics/layout.jsx";

import "assets/css/nucleo-icons.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import "react-notification-alert/dist/animate.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route
        path="/market-analytics"
        render={props => <MarketAnalyticsLayout {...props} />}
      />
      <Redirect from="/" to="/market-analytics/shopee" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
