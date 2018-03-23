import React, { Component } from "react";
import logo from "./logo.svg";
import "./assets/styles/App.css";
import Home from "./pages/Home.js";
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
