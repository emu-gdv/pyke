import React from "react";

import Header from "../../common/header";
import Home from "../../components/home";
import Footer from "../../common/footer";

export default class HomeContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Home/>
        <Footer/>
      </React.Fragment>
    );
  }
}
