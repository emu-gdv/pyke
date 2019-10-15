import React from "react";
import { Col, Container, Row } from "reactstrap";
import ".//meeting-notes.scss";

export default class MeetingNotes extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Meeting Notes</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
