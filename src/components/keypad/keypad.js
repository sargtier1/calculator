import React from "react";

import KeyPadRow from "../keypadrow/keyPadRow";
import Button from "../button/button";

const KeyPad = () => {
  return (
    <div className="keypad">
      <KeyPadRow>
        <Button>C</Button>
        <Button>&larr;</Button>
        <Button>%</Button>
        <Button>/</Button>
      </KeyPadRow>
      <KeyPadRow>
        <Button>9</Button>
        <Button>8</Button>
        <Button>7</Button>
        <Button>*</Button>
      </KeyPadRow>
      <KeyPadRow>
        <Button>6</Button>
        <Button>5</Button>
        <Button>4</Button>
        <Button>-</Button>
      </KeyPadRow>
      <KeyPadRow>
        <Button>3</Button>
        <Button>2</Button>
        <Button>1</Button>
        <Button>+</Button>
      </KeyPadRow>
      <KeyPadRow>
        <Button>0</Button>
        <Button>.</Button>
        <Button type='large'>=</Button>
      </KeyPadRow>
    </div>
  );
};

export default KeyPad;
