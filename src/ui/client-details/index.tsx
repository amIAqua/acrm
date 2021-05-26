import { FC } from 'react'
import { useStore } from 'effector-react'
import { $currentClient } from '../../lib/client'
import { DetailsCard, Email, Label, Name, PhoneNumber, Section } from './styled'

export const ClientDetails: FC = () => {
  const currentClient = useStore($currentClient)

  return (
    <DetailsCard>
      <Section>
        <Label>Имя</Label>
        <Name>{`${currentClient?.name} ${currentClient?.surname}`}</Name>
      </Section>
      <Section>
        <Label>Контактный телефон</Label>
        <PhoneNumber>{currentClient?.phoneNumber}</PhoneNumber>
      </Section>

      {currentClient?.email ? (
        <Section>
          <Label>Email</Label>
          <Email>{currentClient?.email}</Email>
        </Section>
      ) : null}
    </DetailsCard>
  )
}
