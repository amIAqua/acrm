import { useStore } from 'effector-react'
import {
  $searchQuery,
  changeSearchQuery,
  getOrders,
  resetSearchQuery,
} from '../model'
import { Search } from '../../../reusable/search'
import { useEffect } from 'react'

export const OrdersSearch = (): JSX.Element => {
  const searchQuery = useStore($searchQuery)

  useEffect(() => resetSearchQuery(), [])

  return (
    <Search
      searchQuery={searchQuery}
      changeSearchQuery={changeSearchQuery}
      trigger={getOrders}
      placeholderText='Клиент, транспортное средство, No. заказ-наряда'
    />
  )
}
