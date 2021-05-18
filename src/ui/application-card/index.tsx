import { FC } from 'react'
import {
  StyledApplicationCard,
  NameSection,
  ContactsSection,
  ArrowMore,
  Label,
  Text,
  OwnerSection,
} from './styled'
import { ArrowRightOutlined } from '@ant-design/icons'

export const ApplicationCard: FC = () => {
  return (
    <StyledApplicationCard>
      <OwnerSection>
        <NameSection>
          <Label>Ф.И.О владельца</Label>
          <Text>A. K. Igorev</Text>
        </NameSection>
        <ContactsSection>
          <Label>Контактный телефон</Label>
          <Text>+375(33)500-55-75</Text>
        </ContactsSection>
      </OwnerSection>

      <ArrowMore>
        <ArrowRightOutlined style={{ fontSize: '20px' }} />
      </ArrowMore>
    </StyledApplicationCard>
  )
}
