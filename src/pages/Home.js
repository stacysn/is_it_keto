import React, { Component } from "react";
import SearchContainer from "./body/SearchContainer.js";
import Header from "./head/Header.js";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchContainer />
      </div>
    );
  }
}
export default Home;
