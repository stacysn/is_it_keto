import React, { Component } from "react";
import "../assets/styles/Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "results-container">
        <h1>Results</h1>
        <div id="results">
          {this.props.results.map((element, index) => {
            const foodName = food => {
              return food.charAt(0).toUpperCase() + food.slice(1);
            };
            const totalCarbs = this.props.results[index].nf_total_carbohydrate;
            const servingSize = `${this.props.results[index].serving_qty}  ${
              this.props.results[index].serving_unit
            }`;
            const servingSizeGrams = this.props.results[index]
              .serving_weight_grams;
            const dietaryFiber = this.props.results[index].nf_dietary_fiber;
            const netCarbs =
              this.props.results[index].nf_total_carbohydrate -
              this.props.results[index].nf_dietary_fiber;

            return (
              <div key={index}>
                <b>
                  {foodName(this.props.results[index].food_name)} &mdash;{" "}
                  {netCarbs < 10 ? "Keto-friendly!" : "not Keto-friendly."}
                </b>
                <p>
                  Serving size: {servingSize} ({servingSizeGrams} g)
                </p>

                <p>{totalCarbs} g Total Carbs</p>
                <p>&mdash; {dietaryFiber} g Dietary Fiber</p>
                <p>= {netCarbs} g Net Carbs</p>
              </div>
            );

          })}
        </div>
      </div>
    );
  }
}

export default Results;
