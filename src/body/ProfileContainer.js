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
      <div>
        <h1 className="profile-container">My Profile</h1>
        <FoodSearchContainer />
      </div>
    )
  }
}

export default ProfileContainer;
