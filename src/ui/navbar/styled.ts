import styled from 'styled-components'
import { $dark_blue } from '../../styles/colors'

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background: transparrent;
`

export const AuthenticationSection = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const AuthBordered = styled.div`
  color: #fff;
  font-size: 18px;
  display: flex;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 1rem;
  align-items: center;
  padding: 5px 20px;

  &:nth-child(1n) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  &:hover {
    border: 2px solid ${$dark_blue};
    background: ${$dark_blue};
  }
`

export const User = styled.h3`
  color: #fff;
`

export const BackArrow = styled.div`
  color: #fff;
  font-size: 25px;

  &:nth-child(1n):hover {
    color: ${$dark_blue};
  }
`
