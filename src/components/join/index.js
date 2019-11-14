import React from "react";
import { Button, Col, Container, Jumbotron, Row } from "reactstrap";
import ".//join.scss";
import { Link } from "react-router-dom";

export default class Join extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Join SGW Dev</h1>
            <Jumbotron fluid className="text-center mt-5">
              <Container fluid>
                <h1 className="display-1">Under Construction</h1>
                <p className="lead">
                  Contact us in regards to joining our student organization.
                </p>
                <Button className="card-button d-block m-auto" type="button">
                  <Link exact to="/contact-us">
                    Contact Us!
                  </Link>
                </Button>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}
