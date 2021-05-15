import styled from 'styled-components'

export const StyledMainMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`

export const MenuItem = styled.div`
  background: #fff;
  width: 400px;
  height: 60px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    background: #181e22;
    color: #fff;
    cursor: pointer;
  }
`

export const ItemTitle = styled.h2`
  padding-left: 1rem;
`
