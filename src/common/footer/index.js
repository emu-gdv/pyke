import React from "react";
import ".//footer.scss";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="bg-light footer mt-auto">
        <Container fluid>
          <Row className="pt-3 pb-3">
            <Col sm="3">
              <h5 className="text-center">Quick Links</h5>
              <ul className="text-center list-unstyled">
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
                  <Link exact to="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link exact to="/meeting-notes">
                    Meeting Notes
                  </Link>
                </li>
                <li>
                  <Link exact to="/professional-development">
                    Professional Development
                  </Link>
                </li>
                <li>
                  <Link exact to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm="3">
              <h5 className="text-center">How to Reach Us</h5>
              <ul className="text-center list-unstyled">
                <li>
                  <Link exact to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm="3">
              <h5 className="text-center">Connect</h5>
              <ul className="text-center list-unstyled">
                <li>
                  <a  target="_blank" href="https://www.facebook.com/groups/817241408710942/">
                    Facebook
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/sgwdev/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/SGWDev/">
                    Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://discord.gg/SYkFJFK">
                    Discord
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm="3">
              <h5 className="text-center">Members</h5>
              <p className="text-center">Member Services Coming Soon</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
