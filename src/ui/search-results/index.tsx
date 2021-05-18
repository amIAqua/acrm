import { FC } from 'react'
import { StyledSearchResults } from './styled'
import { ApplicationCard } from '../application-card'

export const SearchResults: FC = () => {
  return (
    <StyledSearchResults>
      <ApplicationCard />
    </StyledSearchResults>
  )
}
