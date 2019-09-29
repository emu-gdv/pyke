import React from "react";
import { Col, Container, Row } from "reactstrap";
import ".//projects.scss";

export default class Projects extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Projects</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
