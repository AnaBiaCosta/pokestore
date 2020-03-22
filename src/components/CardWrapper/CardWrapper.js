import React from 'react'
import { Wrapper } from './CardWrapper.style'

const CardWrapper = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export { CardWrapper }