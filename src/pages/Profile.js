import React, { Component } from "react";
import Header from "../head/Header.js";
import ProfileContainer from "../body/ProfileContainer.js";

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProfileContainer />
      </div>
    );
  }
}
export default Profile;
