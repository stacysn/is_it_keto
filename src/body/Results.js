import React, { Component } from "react";

class Results extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isKeto: null
    };
  }

  render () {
    return (
      <div>
        <h1>Results</h1>
        <div id="results">
          {this.props.results.map((element, index) => {
            let totalCarbs = this.props.results[index].nf_total_carbohydrate;
            let dietaryFiber = this.props.results[index].nf_dietary_fiber;
            let netCarbs = this.props.results[index].nf_total_carbohydrate - this.props.results[index].nf_dietary_fiber;
            return (
              <div key={index}>
                <b>{this.props.results[index].food_name}</b>
                <p>{totalCarbs}g Total Carbs</p>
                <p>&mdash; {dietaryFiber}g Dietary Fiber</p>
                <p>= {netCarbs}g Net Carbs</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
export default Results;
