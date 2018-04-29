import React, { Component } from "react";
import Header from "../head/Header.js";
import FoodSearchContainer from "../body/food/FoodSearchContainer.js";
import ExerciseSearchContainer from "../body/exercise/ExerciseSearchContainer.js";
import { Parallax, Background } from 'react-parallax';


class Home extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Parallax
          bgImage={require('../assets/images/lemon.jpeg')}
          bgImageAlt="the lemon"
          strength={200}
        >

          <div style={{ height: '600px' }} />
        </Parallax>
      </div>

        <Header />

        <FoodSearchContainer />
        <ExerciseSearchContainer />
      </div>
    );
  }
}

export default Home;
