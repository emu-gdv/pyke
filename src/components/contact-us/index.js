import React from "react";
import { Button, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import ".//contact.scss";

export default class Contact extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Contact Us</h1>
          </Col>
          <Col className="text-center" sm={12}>
            <p>Sub Heading Text</p>
          </Col>
          <Col sm={8}>
            <Form method="POST" action="../../../config/mail/email-handle.js">
              <FormGroup>
                <Label className="mb-2 mr-2" for="name">Name</Label>
                <Input className="mb-2" type="text" name="name" id="name" placeholder="John Smith"/>
                <FormFeedback valid tooltip>Good Job</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label className="mb-2 mr-2" for="email">Email</Label>
                <Input className="mb-2" type="email" name="email" id="email" placeholder="example@emich.edu"/>
                <FormFeedback valid tooltip>Email is Valid</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" placeholder="Tell us what 2+2 equals"/>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
          <Col sm={4}>
            <p>Enter your info so we can reach out to you</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
