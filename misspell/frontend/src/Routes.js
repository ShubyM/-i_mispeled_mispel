import React, { Component } from "react";
import { render } from "react-dom";
import App from "./App.js"
import WaitingRoom from "./pages/WaitingRoom.js"
import GameRoom from "./pages/GameRoom.js"
import EnterRoom from "./pages/EnterRoom.js"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { getElementError } from "@testing-library/react";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/room" component={WaitingRoom}></Route>
          <Route path="/game" component={GameRoom}></Route>
          <Route path="/join" component={EnterRoom}></Route>
        </Switch>
      </Router>
    )
  }
}
