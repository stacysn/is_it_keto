import React, { Component } from "react";
import Header from "../head/Header.js";
import FoodSearchContainer from "../body/food/FoodSearchContainer.js";
import ExerciseSearchContainer from "../body/exercise/ExerciseSearchContainer.js";
import { Parallax, Background } from "react-parallax";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="parallax">
          <Parallax
            bgImage={require("../assets/images/lemon.jpeg")}
            bgImageAlt="the lemon"
            strength={200}
          >
            <div className="App-intro">
              <h1> Welcome to your new health app </h1>
              <h1>
                {" "}
                Look up any servings of food to see if it's keto friendly
              </h1>
              <h1> Create a profile to check your consumption </h1>
              <h1>
                <a className="signup-button" href="/signup">
                  Need an Account? Sign Up!
                </a>
              </h1>
            </div>
            <div style={{ height: "300px" }} />
          </Parallax>
        </div>
        <Header />
        <FoodSearchContainer />
        <div className="parallax-2">
          <Parallax
            bgImage={require("../assets/images/avocado.jpeg")}
            bgImageAlt="the avocado"
            strength={200}
          >
            <div style={{ height: "700px" }} />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default Home;
