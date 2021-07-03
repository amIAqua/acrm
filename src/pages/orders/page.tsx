import { OrdersSearch } from '../../features/orders-search/templates/search'
import { MainLayout } from '../../layouts/main'
import { $orders, $loading } from './model'
import { SearchPageContainer } from './styled'

export const OrdersPage = (): JSX.Element => {
  return (
    <MainLayout>
      <SearchPageContainer>
        <OrdersSearch />
      </SearchPageContainer>
    </MainLayout>
  )
}
