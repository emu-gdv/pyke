import React from "react";
import { Container, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ".//dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons/faFolder";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faFighterJet } from "@fortawesome/free-solid-svg-icons/faFighterJet";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

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
