import React from 'react'

import KeyPadRow from '../keypadrow/keyPadRow'
import Button from '../button/button'

const KeyPad = props => {
  return (
    <div className='keypad'>
      <KeyPadRow>
        <Button onPress={props.onPress} type='clear'>
          C
        </Button>
        <Button onPress={props.onPress} type='back'>
          &larr;
        </Button>
        <Button onPress={props.onPress}>/</Button>
      </KeyPadRow>
      <KeyPadRow>
        <Button onPress={props.onPress}>9</Button>
        <Button onPress={props.onPress}>8</Button>
        <Button onPress={props.onPress}>7</Button>
        <Button onPress={props.onPress}>*</Button>
      </KeyPadRow>
      <KeyPadRow>
        <Button onPress={props.onPress}>6</Button>
        <Button onPress={props.onPress}>5</Button>
        <Button onPress={props.onPress}>4</Button>
        <Button onPress={props.onPress}>-</Button>
      </KeyPadRow>
      <KeyPadRow>
        <Button onPress={props.onPress}>3</Button>
        <Button onPress={props.onPress}>2</Button>
        <Button onPress={props.onPress}>1</Button>
        <Button onPress={props.onPress}>+</Button>
      </KeyPadRow>
      <KeyPadRow type='left'>
        <Button onPress={props.onPress} type='left'>
          0
        </Button>
        <Button onPress={props.onPress}>.</Button>
        <Button onPress={props.onPress} type='large'>
          =
        </Button>
      </KeyPadRow>
    </div>
  )
}

export default KeyPad
