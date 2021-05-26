import { FC } from 'react'
import { setCurrentClient } from '../../lib/client'
import {
  StyledFetchedClientCard,
  NameSection,
  ContactsSection,
  Label,
  Text,
  OwnerSection,
} from './styled'
import { Client } from '../../api/clients/types'

type FetchedClientCardProps = {
  client: Client
}

export const FetchedClientCard: FC<FetchedClientCardProps> = ({ client }) => {
  return (
    <StyledFetchedClientCard onClick={() => setCurrentClient(client)}>
      <OwnerSection>
        <NameSection>
          <Label>Ф.И.О клиента</Label>
          <Text>{`${client.name} ${client.surname}`}</Text>
        </NameSection>
        <ContactsSection>
          <Label>Контактный телефон</Label>
          <Text>{client.phoneNumber}</Text>
        </ContactsSection>
      </OwnerSection>
    </StyledFetchedClientCard>
  )
}
