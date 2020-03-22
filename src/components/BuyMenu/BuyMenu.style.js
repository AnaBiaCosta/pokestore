import styled from 'styled-components'
import { breakpoints } from '../Layout'

export const Wrapper = styled.nav`
  display: none;
  width: 389px;
  height: 1053px;
  margin-right: 32px;
  background-color: #96AFB9;

  ${breakpoints.medium} {
    display: block;
  }
`
