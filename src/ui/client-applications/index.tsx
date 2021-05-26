import { FC } from 'react'
import { useStore, useList } from 'effector-react'
import { $currentClientApplications } from '../../lib/client'
import { ApplicationsList } from './styled'
import { ApplicationItem } from './application'
import { Application, ClientApplication } from '../../api/applications/types'

export const ClientApplications: FC = () => {
  const clientApplications = useList(
    $currentClientApplications,
    (application: ClientApplication) => {
      return <ApplicationItem application={application} />
    }
  )

  return <ApplicationsList>{clientApplications}</ApplicationsList>
}
