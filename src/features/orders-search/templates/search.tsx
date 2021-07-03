import { KeyboardEvent } from 'react'
import { useStore } from 'effector-react'
import { $searchQuery, changeSearchQuery, getOrders } from '../model'
import { Input, Button } from 'antd'
import { SearchFormWrapper, SearchForm } from './styled'

export const OrdersSearch = (): JSX.Element => {
  const searchQuery = useStore($searchQuery)

  const enterPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <SearchFormWrapper>
      <SearchForm>
        <Input
          value={searchQuery}
          type='text'
          placeholder='Клиент, транспортное средство, No. заказ-наряда'
          style={{ marginRight: '1rem', width: '500px' }}
          onChange={(event) => changeSearchQuery(event.target.value)}
          onKeyPress={enterPressHandler}
        />
        <Button
          disabled={!searchQuery}
          type='primary'
          style={{ width: '200px' }}
          onClick={() => getOrders()}
        >
          Поиск
        </Button>
      </SearchForm>
    </SearchFormWrapper>
  )
}
