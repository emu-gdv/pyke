import React from "react";

import Header from "../../common/header";
import Footer from "../../common/footer";
import Join from "../../components/join";

export default class JoinContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Join/>
        <Footer/>
      </React.Fragment>
    );
  }
}
