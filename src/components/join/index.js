import React from "react";
import { Col, Container, Row } from "reactstrap";
import ".//join.scss";

export default class Join extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Join SGW Dev</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
