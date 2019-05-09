import React from "react";
import Login from "../../components/login";

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Login />
      </React.Fragment>
    );
  }
}
