import styled from 'styled-components'
import { $light_blue, $dark_blue } from '../../styles/colors'

type ButtonProps = {
  width?: string
  height?: string
}

export const Button = styled.button<ButtonProps>`
  width: 240px;
  height: 35px;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: 18px;
  border: ${$light_blue};
  background: ${$light_blue};
  cursor: pointer;

  &:hover {
    background: ${$dark_blue};
  }
`
