import React, { Component } from "react";
import { render } from "react-dom";
import MainPage from "./pages/MainPage.js"

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MainPage />;
  }
}
