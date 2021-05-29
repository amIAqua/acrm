import { forward } from 'effector'
import { clientsAPI } from '../../api/clients'
import { historyPush } from '../routing/history'
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

fetchClientApplicationsFx.use(async (client) => {
  return clientsAPI.fetchClientApplications(client.id)
})

forward({
  from: setCurrentClient,
  to: fetchClientApplicationsFx,
})

setCurrentClient.watch((client) => {
  historyPush(`/clients/${client.id}/applications`)
})
