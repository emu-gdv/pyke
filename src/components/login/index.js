import React from "react";
import { Button, Container, Form, FormGroup, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";
import g_logo from "../../assets/images/google/g-logo.png";
import ".//login.scss";

export default class Login extends React.Component {

  render() {
    return (
      <Container fluid className="login">
        <Row className="h-100 w-100 position-absolute ">
          <Form className="text-center m-auto form-login" method="POST">
            <h2 className="form-head">{this.props.heading}</h2>
            <span>
              Accounts require <strong>@emich.edu</strong>
            </span>
            <FormGroup>
              <i className="fa fa-poo"/>
              <Input
                className="text-center mt-2 mb-2"
                type="email"
                name="username"
                id="form-email"
                placeholder="your-email@emich.edu"
                autocomplete="username"
              />
              <Input
                className="text-center mt-2 mb-2"
                type="password"
                name="password"
                id="form-password"
                placeholder="**********"
                autocomplete="new-password"
              />
              <Button className="submit w-100 mb-1">Submit</Button>
              <Button className="create-account-link d-inline-block float-left pl-2 mt-2 mb-2"
                      tag={Link}
                      exact
                      to="/create-account"
              >
                Create Account
              </Button>
              <Button className="forget-link d-inline-block float-right pr-2 mt-2 mb-2"
                      tag={Link}
                      exact
                      to="/forget-password"
              >
                Forget Password?
              </Button>
              <Button
                className="google-sso w-100 mt-1 mb-1"
                tag={Link}
                exact
                to="/auth/google"
                onClick={location.reload}
              >
                <img src={g_logo} className="google-icon" alt="Google Logo"/>
                <span className="google-text">Sign in with Google</span>
              </Button>
            </FormGroup>
          </Form>
        </Row>
      </Container>
    );
  }
}

Login.defaultProps = {
  heading: "Login"
};
