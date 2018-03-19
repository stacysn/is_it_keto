import React, { Component } from "react";

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
    if (netCarbs < 10) {
      return(
        <span>Keto-friendly!</span>
      )
    } else {
      return(
        <span>Not Keto-friendly.</span>
      )
    }
  }

  render() {
    return(
      <div>
        <h1>Results</h1>
        <div id="results">
          {this.props.results.map( (element, index) => {
            const totalCarbs = this.props.results[index].nf_total_carbohydrate;
            const servingSize = `${this.props.results[index].serving_qty}  ${this.props.results[index].serving_unit}`;
            const servingSizeGrams = this.props.results[index].serving_weight_grams;
            const dietaryFiber = this.props.results[index].nf_dietary_fiber;
            const netCarbs = this.props.results[index].nf_total_carbohydrate - this.props.results[index].nf_dietary_fiber;

            return(
              <div key={`food-idx-${index}`}>
                <b>{this.foodName(this.props.results[index].food_name)} &mdash; {this.isKeto(netCarbs)}</b>
                <p>Serving size: {servingSize} ({servingSizeGrams} g)</p>
                <p>{totalCarbs} g Total Carbs</p>
                <p>&mdash; {dietaryFiber} g Dietary Fiber</p>
                <p>= {netCarbs} g Net Carbs</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Results;
