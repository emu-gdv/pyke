import React from "react";
import { Col, Container, Row } from "reactstrap";
import ".//get_started.scss";

export default class GetStarted extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Getting Started</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
