import React, { Component } from "react";
import "../../assets/styles/FoodIndexItem.css";

class FoodIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dietaryFiber: this.props.dietaryFiber,
      foodName: this.props.foodName,
      netCarbs: this.props.netCarbs,
      servingSize: this.props.servingSize,
      servingSizeGrams: this.props.servingSizeGrams,
      totalCarbs: this.props.totalCarbs
    };
  }
  handleNewEntry = event => {
    event.preventDefault();
    console.log(this.state);
    fetch("http://localhost:3001/api/foodEntry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state)
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
    const isKeto = this.props.isKeto;
    if (true) {
      return (
        <div>
          <div className="food-idx-item">
            <b>
              {this.state.foodName} &mdash; {isKeto}
            </b>
            <p>
              Serving size: {this.state.servingSize} ({this.state.servingSizeGrams} g)
            </p>
            <p>{this.state.totalCarbs} g Total Carbs</p>
            <p>&mdash; {this.state.dietaryFiber} g Dietary Fiber</p>
            <p>= {this.state.netCarbs} g Net Carbs</p>
          </div>
          <button type="submit" onClick={this.handleNewEntry}>
            Add to Profile
          </button>
        </div>
      );
    } else {
      return (
        <div className="food-idx-item">
          <b>
            {this.state.foodName} &mdash; {isKeto}
          </b>
          <p>
            Serving size: {this.state.servingSize} ({this.state.servingSizeGrams} g)
          </p>
          <p>{this.state.totalCarbs} g Total Carbs</p>
          <p>&mdash; {this.state.dietaryFiber} g Dietary Fiber</p>
          <p>= {this.state.netCarbs} g Net Carbs</p>
        </div>
      );
    }
  }
}

export default FoodIndexItem;
