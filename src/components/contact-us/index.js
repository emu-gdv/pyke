import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from "reactstrap";
import ".//contact.scss";
import ReCAPTCHA from "react-google-recaptcha";

export default class Contact extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      captchaOk: false,
      emailOk: false,
      modalTitle: "",
      modalMessage: [],
      captchaToken: "",
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
        "Expect a response within 1-2 Days"],
      modalTitle: "Message Sent!",
      modal: !this.state.modal
    });
    this.clearForm();
  }

  toggleWithError() {
    this.setState({
      emailOk: false,
      modalMessage: [
        "An internal error has occurred.  Email not sent!",
        "Please email us at sgw_dev@emich.edu"],
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
    console.log(this.state.captchaToken);
    if (document.forms["contact-form"].reportValidity()) {
      window.grecaptcha.reset();
      e.preventDefault();
    } else {
      // window.scrollTo(0, 0);
      return;
    }

    fetch("/api/contact-form",
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(
          {
            from: `${document.getElementById("name").value} <${document.getElementById("email").value}>`,
            subject: "Contact Form Submission",
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
          throw new Error("Something went wrong...");
        }
      })
      .then(data => this.toggle())
      .catch(error => {
        console.log(error);
        this.toggleWithError();
      });
  }

  render() {
    const message = this.props;

    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center pt-4">
            <h1>Contact Us</h1>
          </Col>
          <Col className="text-center" sm={12}>
            <p>Get Info to Join Today</p>
          </Col>
          <Col sm={6}>
            <Form className="contact-form" id="contact-form" action="/contact-us" method="post">
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
                <Input type="textarea" name="message" id="message" placeholder="Let us know how we can help you!"/>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col lg={6} sm={12}>
                    <ReCAPTCHA id='captcha' className="mb-2"
                               ref='recaptcha'
                               sitekey={process.env.RECAPTCHA_SITE_KEY}
                               onChange={this.onChange}
                    />
                  </Col>
                  <Col lg={6} sm={12}>
                    <Button id="submit-button" className=" d-block m-auto" type='button'
                            onClick={e => this.onSubmitClick(e)}
                            disabled={!this.state.captchaOk}>Submit</Button>
                  </Col>
                </Row>
              </FormGroup>
              <Button id="submit-button" type='button' onClick={e => this.onSubmitClick(e)}
                      disabled={!this.state.captchaOk}>Submit</Button>
              <ReCAPTCHA id='captcha'
                         ref='recaptcha'
                         sitekey={this.state.captchaSiteKey}
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
          <Col sm={6}>
            <h3 className="mt-2 mb-2 text-center">We can provide the following:</h3>
            <ListGroup>
              <ListGroupItemHeading className="mt-2 text-right">Communication</ListGroupItemHeading>
              <ListGroupItem>We utilize discord and a mailing list to provide timely information</ListGroupItem>
              <ListGroupItemHeading className="mt-2 text-right">Onboarding</ListGroupItemHeading>
              <ListGroupItem>A comprehensive getting started guide can be offered</ListGroupItem>
              <ListGroupItemHeading className="mt-2 text-right">Questions</ListGroupItemHeading>
              <ListGroupItem>Any questions, suggestions, or help we can provide, we would be glad too</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
