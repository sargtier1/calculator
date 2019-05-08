import React, { Component } from "react";

import Screen from "../screen/screen";
import KeyPad from "../../components/keypad/keypad";

class Calculator extends Component {
  state = {
    equation: "",
    result: 0
  };

  onPress = e => {
    let equation = this.state.equation;
    const pressedButton = e.target.innerHTML;

    if (pressedButton === "C") return this.clear;
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    ) {
      equation += pressedButton;
    }
  };

  render() {
    return (
      <div id="calculator">
        <Screen equation={this.state.equation} result={this.state.result} />
        <KeyPad />
      </div>
    );
  }
}

export default Calculator;
