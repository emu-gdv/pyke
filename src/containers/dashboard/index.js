import React from "react";

import {Container, Row, Col} from 'reactstrap';

import Dashboard from "../../components/dashboard";
import DashboardHeader from "../../common/dashboard-header";
import DashboardSidebar from "../../components/dashboard-sidebar";

export default class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <DashboardHeader />
        <Container fluid>
          <Row>
            <DashboardSidebar/>
            <Col>
              <Dashboard />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
