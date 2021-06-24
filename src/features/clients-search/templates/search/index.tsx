import { FC, KeyboardEvent } from 'react'
import { useStore } from 'effector-react'
import { Input, Button } from 'antd'
import {
  changeSearchQuery,
  searchRequest,
  $searchQuery,
  resetSearchQuery,
} from '../../model'
import { SearchForm, SearchFormWrapper } from './styled'

export const Search: FC = () => {
  const searchQuery = useStore($searchQuery)

  const enterPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      searchRequest()
      resetSearchQuery()
    }
  }

  return (
    <SearchFormWrapper>
      <SearchForm>
        <Input
          value={searchQuery}
          type='text'
          placeholder='Клиент(Ф.И.О, мобильный телефон, email)'
          style={{ marginRight: '1rem', width: '500px' }}
          onChange={(event) => changeSearchQuery(event.target.value)}
          onKeyPress={enterPressHandler}
        />
        <Button
          disabled={!searchQuery}
          type='primary'
          style={{ width: '200px' }}
          onClick={() => searchRequest()}
        >
          Поиск
        </Button>
      </SearchForm>
    </SearchFormWrapper>
  )
}
