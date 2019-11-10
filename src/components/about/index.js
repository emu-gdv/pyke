import React, { Component } from "react";
import ".//about.scss";
import { Col, Container, Row, ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";

export default class About extends Component {

  render() {
    return (
      <main role="main" className='flex-shrink-0'>
        <Container>
          <Row>
            <Col sm={12} className="text-center pt-4">
              <h1>About Us</h1>
              <p>We are a club focused on learning new skills regarding development, new languages, and solving issues
                to
                creative problems</p>
            </Col>

            <Col sm={6}>
              <h2 className="text-center pt-4">Mission Statement</h2>
              <code>Our organization strives to provide students with opportunities that will develop and improve that
                students skills through teamwork, engaging projects, and leadership opportunities. Our goal is to
                provide students the skills to become a competitive pick for their next internship or job they move on
                too. Teaching students responsibility, leadership, communication skills, and allowing creativity allow
                our members to thrive.</code>
            </Col>
            <Col sm={6}>
              <h2 className="text-center pt-4">Goals</h2>
              <ul>
                <li className="pl-2">Learn to work as a team</li>
                <li className="pl-2">Learn new Languages and Techniques</li>
                <li className="pl-2">Provide a place for students to grow as developers</li>
                <li className="pl-2">Provide support for all members, answering questions and tutoring</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
