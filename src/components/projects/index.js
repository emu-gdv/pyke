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
          <Col sm={4}>
            <h3 className="text-center">Software Dev</h3>
            <h4>Tic Tac Toe:</h4>
            <code>git clone https://github.com/sgw-dev/tic_tac_toe.git
            </code>
            <a href="https://github.com/sgw-dev/pyke"></a>
          </Col>
          <Col sm={4}>
            <h3 className="text-center">Game Dev</h3>
            <h4>2D Platformer:</h4>
            <code>git clone https://github.com/sgw-dev/2D_Platformer.git</code>
          </Col>
          <Col sm={4}>
            <h3 className="text-center">Web Dev</h3>
            <h4>Pyke:</h4>
            <code>git clone https://github.com/sgw-dev/pyke.git
              <br/>cd pike
              <br/>npm install
              <br/>npm start
            </code>
          </Col>
        </Row>
      </Container>
    );
  }
}
