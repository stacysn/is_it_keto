import React, { Component } from "react";
import Header from "../head/Header.js";
import FoodSearchContainer from "../body/food/FoodSearchContainer.js";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FoodSearchContainer />
      </div>
    );
  }
}

export default Home;
