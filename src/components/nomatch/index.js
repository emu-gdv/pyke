import React from "react";
import { Container, Jumbotron } from "reactstrap";
import ".//nomatch.scss";

export default class NoMatch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Jumbotron className="text-center">
            <h1 className="display-1">404 Error</h1>
            <p className="lead">Looks like you found the wrong side of town.</p>
          </Jumbotron>
        </Container>
      </React.Fragment>
    );
  }
}
