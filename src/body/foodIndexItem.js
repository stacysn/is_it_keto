import React, { Component } from "react";

class FoodIndexItem extends Component {
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

    return(
      <div>
        <b>{foodName} &mdash; {isKeto}</b>
        <p>Serving size: {servingSize} ({servingSizeGrams} g)</p>
        <p>{totalCarbs} g Total Carbs</p>
        <p>&mdash; {dietaryFiber} g Dietary Fiber</p>
        <p>= {netCarbs} g Net Carbs</p>
      </div>
    )
  }
}

export default FoodIndexItem;
