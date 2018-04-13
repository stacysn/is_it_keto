import React, { Component } from "react";
import { connect } from "react-redux";
import { Element } from "react-faux-dom";
import * as d3 from "d3";
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
      data: []
    };

    console.log(this.props);

    fetch("http://localhost:3001/api/userFoodEntries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state)
    }).then(response => {
      return response.json().then(json => {
        json.entries.forEach(entry => {
          entry.date = entry.date.getFullYear()
          const temp = this.state.data;
          temp.push(entry);
          this.setState({data: temp})
        });
      });
    });
  }

  plot(chart, width, height) {
    // create scales!
    const xScale = d3
      .scaleBand()
      .domain(this.state.data.map(d => d.date))
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.state.data, d => d.value)])
      .range([height, 0]);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    chart
      .selectAll(".bar")
      .data(this.state.data)
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("x", d => xScale(d.date))
      .attr("y", d => yScale(d.value))
      .attr("height", d => height - yScale(d.value))
      .attr("width", d => xScale.bandwidth())
      .style("fill", (d, i) => colorScale(i));

    chart
      .selectAll(".bar-label")
      .data(this.state.data)
      .enter()
      .append("text")
      .classed("bar-label", true)
      .attr("x", d => xScale(d.date) + xScale.bandwidth() / 2)
      .attr("dx", 0)
      .attr("y", d => yScale(d.value))
      .attr("dy", -6)
      .text(d => d.value);

    const xAxis = d3.axisBottom().scale(xScale);

    chart
      .append("g")
      .classed("x axis", true)
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    const yAxis = d3
      .axisLeft()
      .ticks(5)
      .scale(yScale);

    chart
      .append("g")
      .classed("y axis", true)
      .attr("transform", "translate(0,0)")
      .call(yAxis);

    chart
      .select(".x.axis")
      .append("text")
      .attr("x", width / 2)
      .attr("y", 60)
      .attr("fill", "#000")
      .style("font-size", "20px")
      .style("text-anchor", "middle")
      .text("Last 10 Days");

    chart
      .select(".y.axis")
      .append("text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("transform", `translate(-50, ${height / 2}) rotate(-90)`)
      .attr("fill", "#000")
      .style("font-size", "20px")
      .style("text-anchor", "middle")
      .text("Calories");

    const yGridlines = d3
      .axisLeft()
      .scale(yScale)
      .ticks(5)
      .tickSize(-width, 0, 0)
      .tickFormat("");

    chart
      .append("g")
      .call(yGridlines)
      .classed("gridline", true);
  }

  drawChart() {
    const width = 800;
    const height = 450;

    const el = new Element("div");
    const svg = d3
      .select(el)
      .append("svg")
      .attr("id", "chart")
      .attr("width", width)
      .attr("height", height);

    const margin = {
      top: 60,
      bottom: 100,
      left: 80,
      right: 40
    };

    const chart = svg
      .append("g")
      .classed("display", true)
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    this.plot(chart, chartWidth, chartHeight);

    return el.toReact();
  }

  render() {
    return (
      <div className="profile-container">
        <h1>My Profile</h1>
        {this.drawChart()}
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

export default connect(mapStateToProps)(ProfileContainer);
