import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { Search } from '../../features/clients-search/templates/search'
import { ClientsTable } from '../../ui/clients-table'
import { SearchPageContainer } from './styled'

export const ClientsPage: FC = () => {
  return (
    <MainLayout>
      <SearchPageContainer>
        <Search />
        <ClientsTable />
      </SearchPageContainer>
    </MainLayout>
  )
}
