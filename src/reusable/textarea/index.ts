import styled from 'styled-components'

type TextAreaProps = {
  width?: string
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: ${(props) => (props.width ? props.width : '200px')};
  max-width: ${(props) => (props.width ? props.width : '200px')};
  min-width: ${(props) => (props.width ? props.width : '200px')};
  min-height: 100px;
  max-height: 100px;
  outline: none;
  padding-top: 5px;
  padding-left: 5px;
`
