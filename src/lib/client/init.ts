import { forward, sample } from 'effector'
import { historyPush } from '../routing/history'
import {
  fetchClientApplications,
  $currentClient,
  setCurrentClient,
  $currentClientApplications,
  fetchClientApplicationsFx,
} from './model'

$currentClient.on(setCurrentClient, (_prev, client) => client)

// forward({
//   from: fetchClientApplications,
//   to: fetchClientApplicationsFx,
// })

// sample({
//   clock: fetchClientApplications,
// })

$currentClient.watch((client) => {
  historyPush(`/client/${client?.id}`)
})
