import { forward, sample } from 'effector'
import { clientsAPI } from '../../api/clients'
import { historyPush } from '../routing/history'
import { addNewApplicationFx } from '../create-application'
import {
  $currentClient,
  setCurrentClient,
  $currentClientApplications,
  fetchClientApplicationsFx,
} from './model'

$currentClient.on(setCurrentClient, (_prev, client) => client)

$currentClientApplications.on(
  fetchClientApplicationsFx.doneData,
  (_prev, applications) => applications
)

fetchClientApplicationsFx.use(async (clientId: number) => {
  return clientsAPI.fetchClientApplications(clientId)
})

forward({
  from: setCurrentClient.map((client) => client.id),
  to: fetchClientApplicationsFx,
})

// Refetch all client applications after adding new

sample({
  clock: addNewApplicationFx.done,
  source: $currentClient,
  fn: (client) => client!.id,
  target: fetchClientApplicationsFx,
})

setCurrentClient.watch((client) => {
  historyPush(`/clients/${client.id}/applications`)
})
