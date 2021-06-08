import { FC } from 'react'
import { useStore } from 'effector-react'
import { $currentClient, $currentClientApplications } from '../../lib/client'
import { Details, ClientName } from './styled'

export const ClientDetails: FC = () => {
  const client = useStore($currentClient)
  const clientApplications = useStore($currentClientApplications)

  return (
    <Details>
      <ClientName>{`${client?.name} ${client?.surname} - ${clientApplications.length} заявок`}</ClientName>
    </Details>
  )
}
