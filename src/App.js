import React, { Component } from "react";
import "./assets/styles/App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import SignUp from "./pages/SignUp.js";
import Footer from "./body/Footer.js";

class App extends Component {
  render() {
    return <div className="main-container">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
          <Footer />
        </div>
      </div>;
  }
}

export default App;
