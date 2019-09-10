import React from "react";

import Header from "../../common/header";
import Footer from "../../common/footer";
import Info from "../../components/info";

export default class InfoContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Info />
        <Footer />
      </React.Fragment>
    );
  }
}
