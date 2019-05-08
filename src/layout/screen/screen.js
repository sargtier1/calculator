import React from "react";

import Computation from "./computation-screen/computation-screen";
import Results from "./results-screen/results-screen";

const Screen = props => {
  return (
    <div id="screen">
      <Results>{props.result}</Results>
      <Computation>{props.equation}</Computation>
    </div>
  );
};

export default Screen;
