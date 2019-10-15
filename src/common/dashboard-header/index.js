import React from "react";
import ".//dashboard-header.scss";
import DashboardNav from "../../components/dashboard-nav";

export default class DashboardHeader extends React.Component {

  render() {
    return (
      <header>
        <DashboardNav/>
      </header>
    );
  }
}