import styled from 'styled-components'
import { $dark_blue, $light_blue } from '../../styles/colors'

export const StyledApplicationCard = styled.div`
  width: 100%;
  height: 90px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OwnerSection = styled.div`
  display: flex;
`

export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 4rem;
`

export const ContactsSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.p`
  color: #888;
  font-size: 18px;
  margin-bottom: 1rem;
`

export const Text = styled.h2``

export const ArrowMore = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
  background: ${$light_blue};
  color: #fff;

  &:hover {
    background: ${$dark_blue};
    cursor: pointer;
  }
`
