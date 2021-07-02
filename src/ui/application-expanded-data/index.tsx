import { ClientType } from '../../api/application-creation/types'
import {
  DescriptionInfo,
  ClientInfo,
  CreateDate,
  StartDate,
  DateContainer,
} from './styled'

type ExpandedDataType = {
  client?: ClientType
  createDate: string
  startedAt?: string
  closedAt?: string
  description: string
}

const formattedClient = (client: ClientType) =>
  `${client.name} ${client.surname}, ${client.phoneNumber}, ID - ${client.id}`

const formattedDate = (date: string) => `${date.slice(0, 10)}`

export const ExpandedData = ({
  client,
  description,
  startedAt,
  closedAt,
  createDate,
}: ExpandedDataType): JSX.Element => {
  const showStartOrClosedDate = () => {
    if (startedAt) return <StartDate>{`Старт заявки - ${startedAt}`}</StartDate>

    if (closedAt)
      return <StartDate>{`Закрытие заявки - ${closedAt}`}</StartDate>
  }

  return (
    <>
      <DescriptionInfo>{description}</DescriptionInfo>
      <DateContainer>
        <CreateDate>{`Дата создания заявки - ${formattedDate(
          createDate
        )}`}</CreateDate>
        {showStartOrClosedDate()}
      </DateContainer>

      {client ? (
        <ClientInfo>
          <h4>Клиент - {formattedClient(client)}</h4>
        </ClientInfo>
      ) : null}
    </>
  )
}
