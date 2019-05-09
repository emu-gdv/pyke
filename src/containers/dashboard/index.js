import React from "react";

import Dashboard from "../../components/dashboard";

export default class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Dashboard />
      </React.Fragment>
    );
  }
}
