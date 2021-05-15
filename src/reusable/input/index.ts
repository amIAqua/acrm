import styled from 'styled-components'

type InputProps = {
  width?: string
  height?: string
}

export const Input = styled.input<InputProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '30px')};
  outline: none;
  font-family: 'Roboto Mono', monospace;
  padding-left: 5px;
`
