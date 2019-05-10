import React from "react";
import { Container, Row, Form, FormGroup, Input, Button } from "reactstrap";
import ".//login.scss";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Container fluid className="login">
        <Row className="h-100 w-100 position-absolute ">
          <Form className="text-center m-auto">
            <h2 className="form-head">{this.props.heading}</h2>
            <FormGroup>
              <Input className="text-center mt-2 mb-2"
                type="email"
                name="email"
                id="form-email"
                placeholder="myemail@emich.edu"
              />
              <Input className="text-center mt-2 mb-2"
                type="password"
                name="password"
                id="form-password"
                placeholder="**********"
              />
              <Button>Submit</Button>
            </FormGroup>
          </Form>
        </Row>
      </Container>
    );
  }

}

Login.defaultProps = {
  heading: "Login",
};
