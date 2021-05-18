import { FC } from 'react'
import { Button } from '../../reusable/button'
import { Input } from '../../reusable/input'
import { SearchForm, SearchFormWrapper } from './styled'

export const Search: FC = () => {
  return (
    <SearchFormWrapper>
      <SearchForm>
        <Input
          width={'300px'}
          placeholder='Клиент'
          style={{ marginRight: '1rem' }}
        />
        <Input
          width={'300px'}
          placeholder='Мобильный телефон'
          style={{ marginRight: '1rem' }}
        />
      </SearchForm>
    </SearchFormWrapper>
  )
}
