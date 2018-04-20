import React, { Component } from "react";
import ProfileFoodIndexItem from "./ProfileFoodIndexItem";

class ProfileFoodResults extends Component {
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
        <h1>Food From the Last Week</h1>
        <div id="food-results">
          {this.props.foodData.map((element, index) => {
            const totalCarbs = element.totalCarbs;
            const servingSize = element.servingSize;
            const servingSizeGrams = element.servingSizeGrams;
            const foodName = element.foodName;
            const dietaryFiber = element.dietaryFiber;
            const netCarbs = element.netCarbs;

            return (
              <ProfileFoodIndexItem
                dietaryFiber={dietaryFiber}
                foodName={foodName}
                isKeto={this.isKeto(netCarbs)}
                key={`food-idx-${index}`}
                netCarbs={netCarbs}
                servingSize={servingSize}
                servingSizeGrams={servingSizeGrams}
                totalCarbs={totalCarbs}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProfileFoodResults;
