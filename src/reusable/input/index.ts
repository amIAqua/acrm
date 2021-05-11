import styled from 'styled-components'

type InputProps = {
  width?: string
}

export const Input = styled.input<InputProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
`
