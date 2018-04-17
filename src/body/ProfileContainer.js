import React, { Component } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import { browserHistory, withRouter } from "react-router-dom";
import "../assets/styles/Profile.css";
import FoodResults from "./food/FoodResults.js";
import FoodSearchContainer from "./food/FoodSearchContainer.js";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    let { isLoginPending, isLoginSuccess, loginError, userId } = this.props;

    this.state = {
      date: null,
      userId: this.props.userId,
      userName: "",
      data: {
        labels: [],
        datasets: [
          {
            label: "Max Keto Carb Intake (g)",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [50, 50, 50, 50, 50, 50, 50]
          },
          {
            label: "My Carb Intake",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
          }
        ]
      }
    };
  }

  timesDataFetched = 0;
  handleRender = () => {
    if (!this.props.isLoginSuccess) {
      this.props.history.push("/");
    } else {
      fetch("http://localhost:3001/api/userFoodEntries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state)
      }).then(response => {
        return response.json().then(json => {
          console.log(json);
          this.setState({ userName: json.user });
          json.dataChart.forEach(entry => {
            console.log(this.state.data);
            let temp = this.state.data;
            temp.labels.unshift(entry.date);
            temp.datasets[1].data.unshift(entry.value);
            this.setState({ data: temp });
          });
        });
      });
      this.timesDataFetched++;
    }
  };
  render() {
    if (this.timesDataFetched === 0) this.handleRender();
    return (
      <div className="profile-container">
        <h1>{this.state.userName}</h1>
        <div className="graphContainer">
          <Line
            data={this.state.data}
            options={this.state.options}
            redraw={true}
            width="600"
            height="250"
          />
        </div>
        <FoodSearchContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError,
    userId: state.userId
  };
};

export default connect(mapStateToProps)(withRouter(ProfileContainer));
