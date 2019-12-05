import React from "react";
import { Col, Container, Jumbotron, Row } from "reactstrap";
import ".//professional-development.scss";

export default class ProfessionalDevelopment extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Professional Development</h1>
            <Jumbotron fluid className="text-center mt-5">
              <Container fluid>
                <h1 className="display-1">Under Construction</h1>
                <p className="lead">
                  Professional Development
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}
