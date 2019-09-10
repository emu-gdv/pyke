import React from "react";
import { Col, Container, Row } from "reactstrap";
import ".//info.scss";

export default class Info extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Info</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
