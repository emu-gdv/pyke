import React, { Component } from "react";
import ".//about.scss";
import { Col, Container, Row } from "reactstrap";

export default class About extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>About Us</h1>
            <p>We are a club focused on learning new skills regarding development, new languages, and solving issues to
              creative problems</p>
          </Col>

          <Col sm={8}>
            <h2>Mission Statement</h2>
          </Col>
          <Col sm={4}>
            <h2>Goals</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
