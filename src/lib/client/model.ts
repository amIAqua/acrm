import { createStore, createEvent, createEffect, combine } from 'effector'
import {
  IApplicationFromBackend,
  ClientType,
} from '../../api/application-creation/types'

export const getClient = createEvent<number>()
export const getClientApplications = createEvent<number>()

export const getClientFx = createEffect<number, ClientType>()

export const getClientApplicationsFx =
  createEffect<number, IApplicationFromBackend[]>()

export const $client = createStore<ClientType | null>(null)
export const $clientApplications = createStore<IApplicationFromBackend[]>([])

export const $clientDetails = combine(
  $client,
  $clientApplications,
  (client, clientApplications) => ({
    client,
    applicationsLength: clientApplications.length,
  })
)
