import React from "react";
import PykeNav from "../../components/navbar";
import "../../components/navbar/navbar.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PykeNav/>;
  }
}
