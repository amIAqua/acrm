import { FC } from 'react'
import { AuthArrow, AuthenticationSection, StyledNavbar, User } from './styled'
import { ArrowRightOutlined } from '@ant-design/icons'

export const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <AuthenticationSection>
        <User>ID: 1222032</User>
        <AuthArrow>
          <ArrowRightOutlined />
        </AuthArrow>
      </AuthenticationSection>
    </StyledNavbar>
  )
}
