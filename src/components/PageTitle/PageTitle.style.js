import styled from 'styled-components'
import { breakpoints } from '../Layout'

export const Title = styled.h1`
  font-size: 54px;
  font-weight: 900;
  padding-bottom: 48px;
  color: #334A52;
  display: inline-block;

  ${breakpoints.medium} {
    font-size: 64px;
  }
`