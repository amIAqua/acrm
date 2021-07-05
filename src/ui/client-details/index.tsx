import { FC } from 'react'
import { useStore } from 'effector-react'
import { $clientDetails } from '../../pages/client-applications/model'
import { Details, ClientName } from './styled'

export const ClientDetails: FC = () => {
  const clientDetails = useStore($clientDetails)

  return (
    <Details>
      <ClientName>{`${clientDetails.client?.name} ${clientDetails.client?.surname} - ${clientDetails.applicationsLength} заявок`}</ClientName>
    </Details>
  )
}
