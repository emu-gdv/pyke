import React from "react";
import ReactDOM from "react-dom";
import "./Styles/styles.css";
import "./Styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ExampleNav from "./Components/navbar";

function App() {
  return <ExampleNav/>;
}

ReactDOM.render(<App/>, document.getElementById("root"));
