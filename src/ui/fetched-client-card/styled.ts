import styled from 'styled-components'
import { $light_blue } from '../../styles/colors'

export const StyledFetchedClientCard = styled.div`
  width: 100%;
  height: 90px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 10px solid #fff;
  margin-top: 0.5rem;

  &:hover {
    cursor: pointer;
    border-bottom: 10px solid ${$light_blue};
  }
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
  font-size: 15px;
  margin-bottom: 0.7rem;
`

export const Text = styled.h3``
