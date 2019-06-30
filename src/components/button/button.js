import React from 'react'
import styled from 'styled-components'

const Button = props => {
  const classes = ['btn']

  if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
    classes.push('btn--' + props.type)

  if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
    classes.push('btn--' + props.type)

  return (
    <button className={classes.join(' ')} onClick={props.onPress}>
      {props.children}
    </button>
  )
}

const StyledButton = styled.button`
  border-radius: 30px;
`

export default Button
