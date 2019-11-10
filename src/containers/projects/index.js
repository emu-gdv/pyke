import React from "react";

import Header from "../../common/header";
import Footer from "../../common/footer";
import Projects from "../../components/projects";

export default class ProjectsContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Projects/>
        <Footer/>
      </React.Fragment>
    );
  }
}
