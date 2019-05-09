import React from "react";
import PykeNav from "../navbar";
import ".//header.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PykeNav/>;
  }
}
