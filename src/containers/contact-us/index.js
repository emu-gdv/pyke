import React from "react";

import Header from "../../common/header";
import Footer from "../../common/footer";
import Contact from "../../components/contact-us";

export default class ContactContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Contact/>
        <Footer/>
      </React.Fragment>
    );
  }
}
