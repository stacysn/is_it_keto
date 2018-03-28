import React, { Component } from "react";
import logo from "./logo.svg";
import "./assets/styles/App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    );
  }
}

export default App;
