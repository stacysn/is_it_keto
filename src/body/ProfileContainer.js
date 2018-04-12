import React, { Component } from "react";
import { Element } from "react-faux-dom";
import * as d3 from "d3";
import "../assets/styles/Profile.css";
import FoodResults from "./food/FoodResults.js";
import FoodSearchContainer from "./food/FoodSearchContainer.js";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  drawChart() {
    const width = 800;
    const height = 450;
    const el = new Element("div");
    const svg = d3
      .select(el)
      .append("svg")
      .attr("id", "chart")
      .attr("width", width)
      .attr("height", height);

    return el.toReact();
  }

  render() {
    return (
      <div className="profile-container">
        <h1>My Profile</h1>
        {this.drawChart()};
        <FoodSearchContainer />
      </div>
    );
  }
}

export default ProfileContainer;
        
