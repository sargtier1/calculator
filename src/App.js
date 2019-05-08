import React, { Component } from "react";

import Header from './components/header/header'
import Footer from './components/footer/footer'
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
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
