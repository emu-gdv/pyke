import React from "react";
import ".//dashboard-header.scss";
import DashboardNav from "../../components/dashboard-nav";

export default class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <DashboardNav/>
      </header>
    );
  }
}