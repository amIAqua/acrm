import { createStore, createEvent, createEffect, forward } from 'effector'
import { pending } from 'patronum'
import {
  IApplicationFromBackend,
  ClientType,
} from '../../api/application-creation/types'
import { fetchClientApplications, getClientById } from '../../api/clients'

export const getClient = createEvent<number>()
export const getClientApplications = createEvent<number>()
export const refetchApplications = createEvent<number>()

export const getClientFx = createEffect<number, ClientType>()

export const getClientApplicationsFx = createEffect<
  number,
  IApplicationFromBackend[]
>()

export const $client = createStore<ClientType | null>(null)

export const $loading = pending({
  effects: [getClientFx, getClientApplicationsFx],
})

export const $clientId = $client.map((client) => client?.id!)

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
