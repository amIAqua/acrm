import { FC } from 'react'
import { useHistory } from 'react-router'
import { StyledMainMenu, MenuItem, ItemTitle } from './styled'

export const MainMenu: FC = () => {
  const history = useHistory()
  return (
    <StyledMainMenu>
      <MenuItem onClick={() => history.push('/create')}>
        <ItemTitle>Создать заявку</ItemTitle>
      </MenuItem>
      <MenuItem onClick={() => history.push('/search')}>
        <ItemTitle>Поиск</ItemTitle>
      </MenuItem>

      <MenuItem>
        <ItemTitle>В выполнении</ItemTitle>
      </MenuItem>
      <MenuItem>
        <ItemTitle>Заказ-наряд</ItemTitle>
      </MenuItem>
    </StyledMainMenu>
  )
}
