import { FC, KeyboardEvent } from 'react'
import { useStore } from 'effector-react'
import { Input } from '../../reusable/input'
import {
  changeSearchQuery,
  searchRequest,
  $searchQuery,
  resetSearchQuery,
} from '../../lib/clients-search'
import { SearchForm, SearchFormWrapper } from './styled'
import { Button } from '../../reusable/button'

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
          width={'500px'}
          placeholder='Клиент(Ф.И.О, мобильный телефон, email)'
          style={{ marginRight: '1rem' }}
          onChange={(event) => changeSearchQuery(event.target.value)}
          onKeyPress={enterPressHandler}
        />
        <Button type='button' onClick={() => searchRequest()}>
          Поиск
        </Button>
      </SearchForm>
    </SearchFormWrapper>
  )
}
