import React from "react";

import Header from "../../common/header";
import Footer from "../../common/footer";
import Privacy from "../../components/privacy-policy";

export default class PrivacyContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Privacy />
        <Footer />
      </React.Fragment>
    );
  }
}
