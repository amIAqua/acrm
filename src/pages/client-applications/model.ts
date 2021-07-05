import { combine, createStore } from 'effector'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { $client, getClientApplicationsFx } from '../../features/client/model'

export const $clientApplications = createStore<IApplicationFromBackend[]>([])

export const $clientDetails = combine(
  $client,
  $clientApplications,
  (client, clientApplications) => ({
    client,
    applicationsLength: clientApplications.length,
  })
)

$clientApplications.on(
  getClientApplicationsFx.doneData,
  (_prev, applications) => applications
)
