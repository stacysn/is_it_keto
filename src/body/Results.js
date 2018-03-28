import React, { Component } from "react";
import FoodIndexItem from "./foodIndexItem";
import "../assets/styles/Results.css";

class Results extends Component {
  constructor(props, context) {
    super(props, context);
    this.foodName = this.foodName.bind(this);
    this.isKeto = this.isKeto.bind(this);
  }

  foodName(food) {
    return food.charAt(0).toUpperCase() + food.slice(1);
  }

  isKeto(netCarbs) {
    return(
      netCarbs < 10 ? <span>Keto-friendly!</span> : <span>Not Keto-friendly.</span>
    )
  }

  render() {
    return (
      <div className="results-container">
        <h1>Results</h1>
        <div id="results">
          {this.props.results.map( (element, index) => {
            const totalCarbs = element.nf_total_carbohydrate;
            const servingSize = `${element.serving_qty}  ${element.serving_unit}`;
            const servingSizeGrams = element.serving_weight_grams;
            const dietaryFiber = element.nf_dietary_fiber;
            const netCarbs = (element.nf_total_carbohydrate - element.nf_dietary_fiber).toFixed(2);

            return(
              <FoodIndexItem
                dietaryFiber={ dietaryFiber }
                foodName={ this.foodName(element.food_name) }
                isKeto={ this.isKeto(netCarbs) }
                key={ `food-idx-${index}` }
                netCarbs={ netCarbs }
                servingSize={ servingSize }
                servingSizeGrams={ servingSizeGrams }
                totalCarbs={ totalCarbs }
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Results;
