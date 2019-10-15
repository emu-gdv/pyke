import React from "react";

import { Col, Container, Row } from "reactstrap";

import Dashboard from "../../components/dashboard";
import DashboardHeader from "../../common/dashboard-header";
import DashboardSidebar from "../../components/dashboard-sidebar";

export default class DashboardContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <DashboardHeader/>
        <Container fluid>
          <Row>
            <DashboardSidebar/>
            <Col>
              <Dashboard/>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
