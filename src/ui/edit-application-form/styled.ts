import styled from 'styled-components'
import { $dark_gray } from '../../styles/colors'

export const FormWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0 auto;
`

export const Form = styled.form`
  width: 500px;
  margin: 0 auto;
`

export const ClientSection = styled.div`
  h2 {
    margin-bottom: 1rem;
  }

  margin-bottom: 2rem;
`

export const VehicleSection = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  margin-bottom: 2rem;
`

export const IssuesSection = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  margin-bottom: 2rem;
`

export const ButtonSection = styled.div`
  text-align: right;
`

export const GridFields = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 237.5px 237.5px;
  grid-column-end: auto;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
`
