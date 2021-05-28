import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { Search } from '../../ui/search'
import { SearchResults } from '../../ui/search-results'
import { SearchPageContainer } from './styled'

export const ClientsPage: FC = () => {
  return (
    <MainLayout>
      <SearchPageContainer>
        <Search />
        <SearchResults />
      </SearchPageContainer>
    </MainLayout>
  )
}
