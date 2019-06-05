import React from "react";

import ".//dashboard-sidebar.scss";
import { ListGroup, ListGroupItem, UncontrolledAlert } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faDog, faFolder, faTrash, faFighterJet } from "@fortawesome/free-solid-svg-icons/";

export default class DashboardSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="dashboard-sidebar d-inline-block">
        <section>
          <UncontrolledAlert color="info">Alert</UncontrolledAlert>
        </section>
        <section className="dash-sidebar">
          <ListGroup flush>
            <ListGroupItem tag={Link} href="#"><FontAwesomeIcon icon={faGithubSquare}/> Integration</ListGroupItem>
            <ListGroupItem tag={Link} href="#"><FontAwesomeIcon icon={faFolder}/> Projects</ListGroupItem>
            <ListGroupItem tag={Link} href="#"><FontAwesomeIcon icon={faDog}/> Dog</ListGroupItem>
            <ListGroupItem tag={Link} href="#"><FontAwesomeIcon icon={faTrash}/> Trash</ListGroupItem>
            <ListGroupItem tag={Link} href="#"><FontAwesomeIcon icon={faFighterJet}/> Top Gun</ListGroupItem>
          </ListGroup>
        </section>
      </aside>
    );
  }
}