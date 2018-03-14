import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './head/Header.js';
import SearchContainer from './body/SearchContainer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchContainer />
      </div>
    );
  }
}

export default App;
