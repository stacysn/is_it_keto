import React, { Component } from "react";
import Header from "../head/Header.js";
import FoodSearchContainer from "../body/food/FoodSearchContainer.js";

// disconnected exercise container to focus on achieving food MVP 
// import ExerciseSearchContainer from "../body/exercise/ExerciseSearchContainer.js";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FoodSearchContainer />
        {/* <ExerciseSearchContainer /> */}
      </div>
    );
  }
}

export default Home;
