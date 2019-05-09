import React from "react";
import ".//footer.scss";
import { Container, Row, Col } from "reactstrap";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="mt-5 bg-light">
        <Container fluid>
          <Row className="text-center pt-3 pb-3">
            <Col sm="3">Dog</Col>
            <Col sm="3">Dog</Col>
            <Col sm="3">Cat</Col>
            <Col sm="3">Pig</Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
