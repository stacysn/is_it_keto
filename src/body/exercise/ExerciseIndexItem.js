import React, { Component } from "react";
import "../../assets/styles/ExerciseIndexItem.css";

class ExerciseIndexItem extends Component {
  render() {
    const {
      calories,
      duration,
      exerciseName
    } = this.props;

    return(
      <div className="exercise-idx-item">
        <b>{exerciseName}</b>
        <p>Duration: {duration} minutes</p>
        <p>{calories} total kcals burned</p>
      </div>
    )
  }
}

export default ExerciseIndexItem;
