import React, { Component } from "react";
import "../assets/styles/Profile.css";
import BarChart from "./charts/BarChart";
import FoodResults from "./food/FoodResults.js"
import FoodSearchContainer from "./food/FoodSearchContainer.js"

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-container">
        <h1>My Profile</h1>
          <FoodSearchContainer />
          <BarChart data={[5,10,1,3]} size={[500,500]} />
      </div>
    )
  }
}

export default ProfileContainer;
