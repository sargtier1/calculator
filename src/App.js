import React, { Component } from "react";

import Header from './components/header/header'
import Calculator from './layout/calculator/calculator'

import "./App.css";


class App extends Component {
  state = {
 
  };

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Calculator /> 
      </div>
    );
  }
}

export default App;
