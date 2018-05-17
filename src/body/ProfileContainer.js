import React, { Component } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import { browserHistory, withRouter } from "react-router-dom";
import "../assets/styles/Profile.css";
import FoodResults from "./food/FoodResults.js";
import FoodSearchContainer from "./food/FoodSearchContainer.js";
import ProfileFoodResults from "./food/ProfileFoodResults.js";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    let { isLoginPending, isLoginSuccess, loginError, userId } = this.props;

    this.state = {
      userId: this.props.userId,
      userName: "",
      refreshed: 0,
      resultCardData: [],
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

  //called when events requiring re-render occur in child Components
  handleRefresh = () => {
    this.handleRender();
    let temp = this.state.refreshed;
    temp = temp + 1;
    this.setState({ refreshed: temp });
  };

  handleRender = async () => {
    if (!this.props.isLoginSuccess) {
      this.props.history.push("/");
    } else {
      this.timesDataFetched++;
      const response = await fetch(
        "http://localhost:3001/api/userFoodEntries",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: this.state.userId })
        }
      );
      const json = await response.json();
      //handling the actual chart data
      this.setState({ userName: json.user });
      let temp = this.state.data;
      temp.labels = [];
      temp.datasets[1].data = [];
      this.setState({ data: temp });

      //handling the chart data labels
      json.dataChart.forEach(entry => {
        let temp = this.state.data;
        temp.labels.unshift(entry.date);
        temp.datasets[1].data.unshift(entry.value);
        this.setState({ data: temp });
      });

      //preparing the resultsCard data to be passed to this weeks food
      temp = [];
      this.setState({ resultCardData: temp });

      json.entries.forEach(entry => {
        let temp = this.state.resultCardData;
        temp.push(entry);
        this.setState({ resultCardData: temp });
      });
    }
  };

  render() {
    //only renders calls handleRender once
    if (this.timesDataFetched === 0) {
      this.handleRender();
    }
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
        <ProfileFoodResults
          foodEntries={this.state.resultCardData}
          handleRefresh={this.handleRefresh}
        />
        <FoodSearchContainer handleRefresh={this.handleRefresh} />
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
