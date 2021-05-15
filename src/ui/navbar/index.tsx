import { FC } from 'react'
import {
  AuthBordered,
  AuthenticationSection,
  StyledNavbar,
  User,
  BackArrow,
} from './styled'
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useHistory } from 'react-router'

export const Navbar: FC = () => {
  const history = useHistory()

  const goBackArrow = () =>
    history.location.pathname !== '/' ? (
      <BackArrow onClick={() => history.goBack()}>
        <ArrowLeftOutlined style={{ cursor: 'pointer', marginLeft: '1rem' }} />
      </BackArrow>
    ) : (
      <div />
    )

  return (
    <StyledNavbar>
      {goBackArrow()}
      <AuthenticationSection>
        <User>ID: 1222032</User>
        <AuthBordered>
          <UserOutlined />
          <ArrowRightOutlined style={{ marginLeft: '5px' }} />
        </AuthBordered>
      </AuthenticationSection>
    </StyledNavbar>
  )
}
