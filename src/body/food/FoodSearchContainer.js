import React, { Component } from "react";
import "../../assets/styles/FoodSearchContainer.css";
import keys from "../../config/keys";
import FoodResults from "./FoodResults";

class FoodSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    let foodSearchQuery = document.getElementById("foodSearchInput").value;
    const key = keys.nutritionixKey;
    const appId = keys.nutritionixAppId;

    const response = await fetch(
      `https://trackapi.nutritionix.com/v2/natural/nutrients`,
      {
        method: "post",
        headers: {
          "x-app-key": `${key}`,
          "x-app-id": `${appId}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: foodSearchQuery
        })
      }
    );
    if (response.status !== 200) {
      console.log("Error: " + response.status);
    }
    const data = await response.json();
    const results = data.foods;
    this.setState({ results });
    console.log("new state: ", this.state.results);
  };

  render() {
    return (
      <div className="food-search-container">
        <h2>
          Type any food item and serving size to find out if it's keto friendly{" "}
        </h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="foodSearchInput"
            placeholder="Example: For breakfast I had 2 large eggs, 3 pieces of bacon, and 1 medium avocado"
            type="text"
            required
          />

          <input id="submit-button" type="submit" value="Submit" />
          <br />
          <FoodResults
            results={this.state.results}
            handleRefresh={this.props.handleRefresh}
          />
        </form>
      </div>
    );
  }
}

export default FoodSearchContainer;
