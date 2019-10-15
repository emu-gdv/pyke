import React from "react";
import { Container, Jumbotron, Row } from "reactstrap";
import { Link } from "react-router-dom";
import ".//nomatch.scss";

export default class NoMatch extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Container fluid className="four-zero-four">
          <Row className="h-100 w-100 position-absolute ">
            <Jumbotron className="text-center col-sm-12 my-auto">
              <h1 className="display-1">404 Error</h1>
              <p className="lead">Looks like you found the wrong side of town.</p>
              <Link to='/'>Lets take you back home</Link>
            </Jumbotron>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
