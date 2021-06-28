import {
  createStore,
  createEvent,
  createEffect,
  forward,
  sample,
} from 'effector'
import { pending } from 'patronum'
import {
  IApplicationFromBackend,
  ClientType,
} from '../../api/application-creation/types'
import { fetchClientApplications, getClientById } from '../../api/clients'
import { changeStatusFx } from '../statuses'
import { addNewApplicationFx, addApplication } from '../add-application'
import { deleteApplicationFx } from '../application-deleting'

export const getClient = createEvent<number>()
export const getClientApplications = createEvent<number>()

export const getClientFx = createEffect<number, ClientType>()

export const getClientApplicationsFx = createEffect<
  number,
  IApplicationFromBackend[]
>()

export const $client = createStore<ClientType | null>(null)
export const $clientApplications = createStore<IApplicationFromBackend[]>([])

export const $loading = pending({
  effects: [getClientFx, getClientApplicationsFx],
})

// Client
forward({ from: getClient, to: getClientFx })

getClientFx.use(async (clientId: number) => {
  return getClientById(clientId)
})

$client.on(getClientFx.doneData, (_prev, client) => client)

// Client applications
forward({ from: getClientApplications, to: getClientApplicationsFx })

getClientApplicationsFx.use(async (clientId: number) => {
  return fetchClientApplications(clientId)
})

$clientApplications.on(
  getClientApplicationsFx.doneData,
  (_prev, applications) => applications
)

// Refetch all client applications after adding new, updating application status, deleting one

// sample({
//   clock: addNewApplicationFx.done,
//   source: $client,
//   fn: (client) => client?.id!,
//   target: getClientApplicationsFx,
// })

sample({
  clock: [
    changeStatusFx.done,
    // TOFO (fix): do smth with effect initialization
    deleteApplicationFx.done,
  ],
  source: $client,
  fn: (client) => client!.id!,
  target: getClientApplications,
})
