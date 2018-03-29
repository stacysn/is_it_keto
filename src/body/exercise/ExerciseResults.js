import React, { Component } from "react";
import ExerciseIndexItem from "./ExerciseIndexItem";
import "../../assets/styles/ExerciseResults.css";

class ExerciseResults extends Component {
  constructor(props, context) {
    super(props, context);
    this.exerciseName = this.exerciseName.bind(this);
  }

  exerciseName(exercise) {
    return exercise.charAt(0).toUpperCase() + exercise.slice(1);
  }

  render() {
    return (
      <div className="exercise-results-container">
        <h1>ExerciseResults</h1>
        <div id="exercise-results">
          {this.props.results.map( (element, index) => {
            const calories = element.nf_calories;
            const duration = element.duration_min;

            return(
              <ExerciseIndexItem
              calories={ calories }
              duration={ duration }
              exerciseName={ this.exerciseName(element.name) }
              key={ `exercise-idx-${index}` }
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default ExerciseResults;
