import React from "react";
import ".//dashboard-nav.scss";
import { Container, Navbar, NavbarBrand } from "reactstrap";

import brand from "../../assets/images/logo/logo_banner.png";

export default class DashboardNav extends React.Component {

  render() {
    return (
      <Container fluid>
        <Navbar>
          <NavbarBrand>
            <img src={brand} height={35} alt="Logo"/>
          </NavbarBrand>
        </Navbar>
      </Container>
    );
  }
}
