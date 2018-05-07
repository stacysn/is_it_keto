import React, { Component } from "react";
import FoodIndexItem from "./FoodIndexItem";
import "../../assets/styles/FoodResults.css";
import ProfileContainer from "../ProfileContainer.js";

class FoodResults extends Component {
  constructor(props, context) {
    super(props, context);
  }

  foodName = food => {
    return food.charAt(0).toUpperCase() + food.slice(1);
  };

  isKeto = netCarbs => {
    return netCarbs < 10 ? (
      <span>Keto-friendly!</span>
    ) : (
      <span>Not Keto-friendly.</span>
    );
  };

  render() {
    return (
      <div className="food-results-container">
        <h1>FoodResults</h1>
        <div id="food-results">
          {this.props.results.map((element, index) => {
            const totalCarbs = element.nf_total_carbohydrate;
            const servingSize = `${element.serving_qty}  ${
              element.serving_unit
            }`;
            const servingSizeGrams = element.serving_weight_grams;
            const dietaryFiber = element.nf_dietary_fiber;
            const netCarbs = (
              element.nf_total_carbohydrate - element.nf_dietary_fiber
            ).toFixed(2);

            return (
              <FoodIndexItem
                dietaryFiber={dietaryFiber}
                foodName={this.foodName(element.food_name)}
                isKeto={this.isKeto(netCarbs)}
                key={`food-idx-${index}`}
                netCarbs={netCarbs}
                servingSize={servingSize}
                servingSizeGrams={servingSizeGrams}
                totalCarbs={totalCarbs}
                handleRefresh={this.props.handleRefresh}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default FoodResults;
