import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <header>
      <StyledTitle>Calculator App</StyledTitle>
    </header>
  )
}

const StyledTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  padding: 3rem;
  color: #373737;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
`

export default Header
