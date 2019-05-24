import React from "react";
import ".//footer.scss";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="mt-5 bg-light">
        <Container fluid>
          <Row className="pt-3 pb-3">
            <Col sm="3">
              <h5 className="text-center">Menu</h5>
              <ul>
                <li>
                  <Link exact to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link exact to="/about-us">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link exact to="/info">
                    Info
                  </Link>
                </li>
                <li>
                  <Link />
                </li>
                <li>
                  <Link />
                </li>
              </ul>
            </Col>
            <Col sm="3">
              <h5 className="text-center">Connect</h5>
            </Col>
            <Col sm="3">
              <h5 className="text-center">Contact Us</h5>
            </Col>
            <Col sm="3">
              <h5 className="text-center">Join Today</h5>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
