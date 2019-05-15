import React from "react";
import { Container, Row, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import g_logo from "../../assets/images/google/g-logo.png";
import ".//login.scss";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

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
              <Link
                exact
                to="/create-account"
                className="create-account-link d-inline-block float-left pl-2"
              >
                Create Account
              </Link>
              <Link
                exact
                to="/forget-password"
                className="forget-link d-inline-block float-right pr-2"
              >
                Forget Password?
              </Link>
              <Button
                className="google-sso w-100 mt-1 mb-1"
                tag={Link}
                exact
                to="/auth/google"
                onClick={location.reload}
              >
                <img src={g_logo} className="google-icon" />
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
