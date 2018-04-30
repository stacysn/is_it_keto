import React, { Component } from "react";
import "../../assets/styles/ExerciseSearchContainer.css";
import keys from "../../config/keys";
import ExerciseResults from "./ExerciseResults";

class ExerciseSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    //TODO: add more parameters to body: gender, height_cm, weight_kg, age
    let exerciseQuery = document.getElementById("exerciseQueryInput").value;
    const key = keys.nutritionixKey;
    const appId = keys.nutritionixAppId;

    fetch(`https://trackapi.nutritionix.com/v2/natural/exercise`, {
      method: "post",
      headers: {
        "x-app-key": `${key}`,
        "x-app-id": `${appId}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: exerciseQuery
      })
    }).then(response => {
      if (response.status !== 200) {
        console.log("Error: " + response.status);
        return;
      }
      // TODO: .fail this console log

      response.json().then(data => {
        const results = data.exercises;
        this.setState({ results });
        console.log("new state: ", this.state.results);
      });
    });
  }

  render() {
    return (
      <div className="exercise-search-container">
        <h1>Exercise Search</h1>
        <h3> Type in a workout activity to get more information on your results </h3>

        <form onSubmit={this.handleSubmit}>
          <input
            id="exerciseQueryInput"
            placeholder="Example: I ran for 45 minutes."
            type="text"
            required
          />

          <input id="submit-button" type="submit" value="Submit" />
          <br />
          <ExerciseResults results={this.state.results} />
        </form>
      </div>
    );
  }
}

export default ExerciseSearchContainer;
