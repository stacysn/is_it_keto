import React, { Component } from "react";
import "../assets/styles/Profile.css";
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
      </div>
    )
  }
}

export default ProfileContainer;
