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
          {this.props.foodEntries.map((element, index) => {
            const entryId = element._id
            const totalCarbs = element.foodData.totalCarbs;
            const servingSize = element.foodData.servingSize;
            const servingSizeGrams = element.foodData.servingSizeGrams;
            const foodName = element.foodData.foodName;
            const dietaryFiber = element.foodData.dietaryFiber;
            const netCarbs = element.foodData.netCarbs;
            const date =
              element.date.split("")[6] +
              "/" +
              element.date.slice(8, 10) +
              "/" +
              element.date.slice(0, 4);

            return (
              <ProfileFoodIndexItem
                id={entryId}
                date={date}
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
