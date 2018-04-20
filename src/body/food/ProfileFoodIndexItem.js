import React, { Component } from "react";
import { connect } from "react-redux";

import "../../assets/styles/ProfileFoodIndexItem.css";

class ProfileFoodIndexItem extends Component {
  constructor(props) {
    super(props);
  }
  handleNewEntry = event => {
    const entry = {
      foodData: {
        dietaryFiber: this.props.dietaryFiber,
        foodName: this.props.foodName,
        netCarbs: this.props.netCarbs,
        servingSize: this.props.servingSize,
        servingSizeGrams: this.props.servingSizeGrams,
        totalCarbs: this.props.totalCarbs
      },
      foodEater: this.props.userId
    };
    event.preventDefault();
    fetch("http://localhost:3001/api/foodEntry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry)
    }).then(response => {
      return response.json().then(json => {
        if (response.ok) {
          console.log("New Entry Created!");
        } else {
          console.log("Failed to create new entry =[");
        }
      });
    });
  };

  render() {
    const {
      dietaryFiber,
      foodName,
      isKeto,
      netCarbs,
      servingSize,
      servingSizeGrams,
      totalCarbs
    } = this.props;
    let { isLoginSuccess, userId } = this.props;
    if (this.props.isLoginSuccess) {
      return (
        <div>
          <div className="food-idx-item">
            <b>
              {foodName} &mdash; {isKeto}
            </b>
            <p>
              Serving size: {servingSize} ({servingSizeGrams} g)
            </p>
            <p>{totalCarbs} g Total Carbs</p>
            <p>&mdash; {dietaryFiber} g Dietary Fiber</p>
            <p>= {netCarbs} g Net Carbs</p>
          </div>
          <button className="food-idx-item-btn" type="submit" onClick={this.handleNewEntry}>
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <div className="food-idx-item">
          <b>
            {foodName} &mdash; {isKeto}
          </b>
          <p>
            Serving size: {servingSize} ({servingSizeGrams} g)
          </p>
          <p>{totalCarbs} g Total Carbs</p>
          <p>&mdash; {dietaryFiber} g Dietary Fiber</p>
          <p>= {netCarbs} g Net Carbs</p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.isLoginSuccess,
    userId: state.userId
  };
};

export default connect(mapStateToProps)(ProfileFoodIndexItem);
