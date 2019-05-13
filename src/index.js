require('sqreen');

import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/styles.css";
import "./assets/styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import HomeContainer from "./containers/home";
import AboutContainer from "./containers/about";
import NoMatch from "./components/nomatch";
import { BrowserRouter as Router } from "react-router-dom";
import InfoContainer from "./containers/info";
import LoginContainer from "./containers/login";
import DashboardContainer from "./containers/dashboard";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/about-us" component={AboutContainer} />
        <Route exact path="/info" component={InfoContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path={"/auth/google"} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}
