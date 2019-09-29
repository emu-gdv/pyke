import React from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import { Link } from "react-router-dom";
import ".//header.scss";
import logo from "../../assets/images/logo/logo.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <header>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} exact to="/">
            <img
              alt="Pyke Logo"
              src={logo}
              height="75px"
              className="d-inline-block align-top"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} exact to="/about-us">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/projects">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/get-started">
                  Getting Started
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/join-now">
                  Join Now
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/meeting-notes">
                  Meeting Notes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/contact-us">
                  Contact Us
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar> */}
              {/*  <DropdownToggle nav caret> */}
              {/*    Members */}
              {/*  </DropdownToggle> */}
              {/*  <DropdownMenu right> */}
              {/*    <DropdownItem> */}
              {/*      <NavItem> */}
              {/*        <NavLink tag={Link} exact to="/login"> */}
              {/*          Login */}
              {/*        </NavLink> */}
              {/*      </NavItem> */}
              {/*    </DropdownItem> */}
              {/*    <DropdownItem> */}
              {/*      <NavItem> */}
              {/*        <NavLink tag={Link} exact to="/dashboard"> */}
              {/*          Dashboard */}
              {/*        </NavLink> */}
              {/*      </NavItem> */}
              {/*    </DropdownItem> */}
              {/*    <DropdownItem divider/> */}
              {/*    <DropdownItem> */}
              {/*      <NavItem> */}
              {/*        <NavLink tag={Link} exact to="/logout"> */}
              {/*          Logout */}
              {/*        </NavLink> */}
              {/*      </NavItem> */}
              {/*    </DropdownItem> */}
              {/*  </DropdownMenu> */}
              {/* </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
