import React from "react";
import { Container } from "reactstrap";
import ".//dashboard.scss";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid classname="dashboard">
        Dashboard
      </Container>
    );
  }
}
