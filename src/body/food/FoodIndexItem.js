import React, { Component } from "react";
import "../../assets/styles/FoodIndexItem.css";

class FoodIndexItem extends Component {
  handleNewEntry = event => {
    event.preventDefault();
    fetch("http://localhost:3001/api/foodEntry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.props)
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
    if (this.props.isLoginSuccess === true) {
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
          <button type="submit" onSubmit={this.handleNewEntry}>
            Add to Profile
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

export default FoodIndexItem;
