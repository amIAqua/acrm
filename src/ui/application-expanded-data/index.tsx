import { ClientType } from '../../api/application-creation/types'
import { DescriptionInfo, ClientInfo } from './styled'

type ExpandedDataType = {
  client?: ClientType
  description: string
}

const formattedClient = (client: ClientType) =>
  `${client.name} ${client.surname}, ${client.phoneNumber}, ID - ${client.id}`

export const ExpandedData = ({
  client,
  description,
}: ExpandedDataType): JSX.Element => {
  return (
    <>
      <DescriptionInfo>{description}</DescriptionInfo>

      {client ? (
        <ClientInfo>
          <h4>Клиент - {formattedClient(client)}</h4>
        </ClientInfo>
      ) : null}
    </>
  )
}
