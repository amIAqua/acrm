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
  description: string
}

const formattedClient = (client: ClientType) =>
  `${client.name} ${client.surname}, ${client.phoneNumber}, ID - ${client.id}`

export const ExpandedData = ({
  client,
  description,
  createDate,
}: ExpandedDataType): JSX.Element => {
  // const showStartDate = () =>
  //   startDate ? <StartDate>{`Старт заявки - ${startDate}`}</StartDate> : null

  return (
    <>
      <DescriptionInfo>{description}</DescriptionInfo>
      <DateContainer>
        <CreateDate>{`Дата создания заявки - ${createDate}`}</CreateDate>
        {/* {showStartDate()} */}
      </DateContainer>

      {client ? (
        <ClientInfo>
          <h4>Клиент - {formattedClient(client)}</h4>
        </ClientInfo>
      ) : null}
    </>
  )
}
