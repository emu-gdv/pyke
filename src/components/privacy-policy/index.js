import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export default class Privacy extends Component {

  render() {
    return (
      <main role="main" className='flex-shrink-0'>
        <Container>
          <Row>
            <Col sm={12} className="text-center pt-4">
              <h1>Privacy Policy</h1>
              <p>We do not collect any private data from our mobile app users.</p>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
