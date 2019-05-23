import React from "react";
import ".//dashboard-nav.scss";
import { Container, Navbar, NavbarBrand } from "reactstrap";

import brand from '../../assets/images/logo/logo.svg'

export default class DashboardNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid>
        <Navbar>
          <NavbarBrand>
            <img src={brand} height={75}></img>
          </NavbarBrand>
        </Navbar>
      </Container>
    );
  }
}
