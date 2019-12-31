import React from "react";

import Header from "../../common/header";
import Footer from "../../common/footer";
import ProfessionalDevelopment from "../../components/professional-development";

export default class ProfessionalDevelopmentContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <ProfessionalDevelopment/>
        <Footer/>
      </React.Fragment>
    );
  }
}
