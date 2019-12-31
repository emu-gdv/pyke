import React from "react";
import { Col, Container, Jumbotron, Row } from "reactstrap";
import ".//meeting-notes.scss";

export default class MeetingNotes extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Meeting Notes</h1>
            <h5>We meet:</h5>
            <ul className="list-unstyled">
              <li>
                <span>Software Development:    </span>
                <strong>Mondays 7:00pm-9:00pm Pray-Harold Room 217</strong><br/>

              </li>
              <li>
                <span>Game Development:    </span>
                <strong>Mondays 7:00pm-9:00pm Pray-Harold Room 217</strong><br/>
              </li>
            </ul>
            <Jumbotron fluid className="text-center mt-5">
              <Container fluid>
                <h1 className="display-1">Under Construction</h1>
                <p className="lead">
                  Please check back when we transcribe our bi-weekly meeting notes for the public.
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
        < /Container>
          );
          }
          }
