import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import HomeContainer from "./containers/home";
import AboutContainer from "./containers/about";
import NoMatch from "./components/nomatch";
import { BrowserRouter as Router } from "react-router-dom";
import LoginContainer from "./containers/login";
import DashboardContainer from "./containers/dashboard";
import ContactContainer from "./containers/contact-us";
import ProjectsContainer from "./containers/projects";
import MeetingNotesContainer from "./containers/meeting-notes";
import ProfessionalDevelopmentContainer from "./containers/professional-development";

ReactDOM.render(<App/>, document.getElementById("root"));

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/about-us" component={AboutContainer}/>
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/dashboard" component={DashboardContainer}/>
        <Route exact path="/contact-us" component={ContactContainer}/>
        <Route exact path="/projects" component={ProjectsContainer}/>
        <Route exact path="/meeting-notes" component={MeetingNotesContainer}/>
        <Route exact path='/professional-development' component={ProfessionalDevelopmentContainer}/>
        <Route exact path={"/auth/google"}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}
