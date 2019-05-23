import React from "react";

import Dashboard from "../../components/dashboard";
import DashboardHeader from "../../common/dashboard-header";

export default class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <DashboardHeader/>
        <Dashboard />
      </React.Fragment>
    );
  }
}
