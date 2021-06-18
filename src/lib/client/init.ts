import { forward, sample } from 'effector'
import { clientsAPI } from '../../api/clients'
import { addNewApplicationFx } from '../application-creation'
import {
  $client,
  $clientApplications,
  getClientApplicationsFx,
  getClientFx,
  getClient,
  getClientApplications,
} from './model'
import { changeStatusFx } from '../application-statuses/model'

// Client
forward({
  from: getClient,
  to: getClientFx,
})

getClientFx.use(async (clientId: number) => {
  return clientsAPI.getClientById(clientId)
})

$client.on(getClientFx.doneData, (_prev, client) => client)

// Client applications
forward({
  from: getClientApplications,
  to: getClientApplicationsFx,
})

getClientApplicationsFx.use(async (clientId: number) => {
  return clientsAPI.fetchClientApplications(clientId)
})

$clientApplications.on(
  getClientApplicationsFx.doneData,
  (_prev, applications) => applications
)

// Refetch all client applications after adding new or updating application status
sample({
  clock: [addNewApplicationFx.done, changeStatusFx.done],
  source: $client,
  fn: (client) => client!.id!,
  target: getClientApplicationsFx,
})
