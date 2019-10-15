import React from "react";
import { Col, Container, Row } from "reactstrap";
import ".//dashboard.scss";

export default class Dashboard extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Container fluid className="dashboard d-inline-block">
          <Row>
            <Col lg={4} md={6} sm={12} xs={12} className="text-center">
              <h2>Dog</h2>
            </Col>
            <Col lg={4} md={6} sm={12} xs={12} className="text-center">
              <h2>Top Gun</h2>
            </Col>
            <Col lg={4} md={6} sm={12} xs={12} className="text-center">
              <h2>Trash</h2>
            </Col>
          </Row>
          <Row>
            <code>ASDF</code>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
