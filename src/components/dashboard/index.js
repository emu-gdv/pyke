import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import ".//dashboard.scss";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <React.Fragment>
        <aside className="dashboard-sidebar d-inline-block">
          <ListGroup flush>
            <ListGroupItem tag={Link} href="#">Cras justo odio</ListGroupItem>
            <ListGroupItem tag={Link} href="#">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem tag={Link} href="#">Morbi leo risus</ListGroupItem>
            <ListGroupItem tag={Link} href="#">Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem tag={Link} href="#">Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </aside>
        <Container fluid className="dashboard d-inline-block">
          Dashboard
        </Container>
      </React.Fragment>

    );
  }
}
