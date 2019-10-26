import React, { Component } from "react";
import {
  Container, Row, Col, Form, FormGroup, Input, Label, Button, Modal,
  ModalHeader, ModalBody, ModalFooter, FormFeedback
} from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";

export default class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      captchaOk: false,
      emailOk: false,
      modalTitle: "",
      modalMessage: [],
      captchaToken: ""
    };

    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleWithError = this.toggleWithError.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.clearForm = this.clearForm.bind(this);

  }

  onChange(value) {
    if (value) {
      this.setState({
        captchaOk: true,
        captchaToken: value
      });
    } else {
      this.setState({ captchaOk: false });
    }
  }

  toggle() {
    console.log("toggled!");
    this.setState({
      emailOk: true,
      modalMessage: [
        "Your message has been sent successfully.",
        "We will get back with you shortly."],
      modalTitle: "Message Sent!",
      modal: !this.state.modal
    });
    this.clearForm();
  }

  toggleWithError() {
    this.setState({
      emailOk: false,
      modalMessage: [
        "An internal error has occurred.",
        "Email not sent!."],
      modalTitle: "ERROR: Message NOT Sent!",
      modal: !this.state.modal
    });
  }

  clearForm() {
    const arrFields = [
      "name",
      "email",
      "message"
    ];
    arrFields.forEach(function(field) {
      document.getElementById(field).value = "";
    });
  }

  onSubmitClick(e) {

    if (document.forms["contact-form"].reportValidity()) {
      window.grecaptcha.reset();
      e.preventDefault();
    } else {
      // window.scrollTo(0, 0);
      return;
    }

    fetch("/contact-us",
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(
          {
            from: `${document.getElementById("name").value}
<${document.getElementById("email").value}>`,
            subject: "XXXXX Contact Form",
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            gRecaptchaResponse: this.state.captchaToken
          }
        )
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          throw new Error("Something went wrong...");
        }
      })
      .then(data => this.toggle())
      .catch(error => {
        this.toggleWithError();
        console.log(error);
      });
  }

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
            <Form className="contact-form" id="contact-form">
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
              <Button id="submit-button" type='button' onClick={e => this.onSubmitClick(e)}
                      disabled={!this.state.captchaOk}>Submit</Button>
              <ReCAPTCHA id='captcha'
                         ref='recaptcha'
                         sitekey="6LfCor8UAAAAAFa_iHNreiE1t9xXjRl0YuVaNmX1"
                         onChange={this.onChange}
              />
            </Form>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              {/* <Modal isOpen={true} toggle={this.toggle} className={this.props.className}> */}
              <ModalHeader toggle={this.toggle}>{this.state.modalTitle}</ModalHeader>
              <ModalBody>
                {this.state.modalMessage.map((item, index) => {
                  return (
                    <p key={`message-${index}`}>{item}</p>
                  );
                })}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Got it.</Button>{" "}
              </ModalFooter>
            </Modal>
          </Col>
          <Col sm={4}>
            <p>Enter your info so we can reach out to you</p>
          </Col>
        </Row>
      </Container>
    );
  }
};