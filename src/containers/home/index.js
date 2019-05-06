import React from "react";
import ".//home.scss";

import Header from "../../common/header";
import App from "../../components/app/app";
import Footer from "../../common/footer";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <App/>
        <Footer/>
      </React.Fragment>
    );
  }
}
