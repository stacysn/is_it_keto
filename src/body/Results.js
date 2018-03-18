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
        <ul id="results">
          {this.props.results.map((element, index) => {
            return (
              <li key={index}>
                {this.props.results[index].food_name}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
export default Results;
