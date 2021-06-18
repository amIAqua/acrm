import { createStore, createEvent, createEffect } from 'effector'
import {
  IApplicationFromBackend,
  ClientType,
} from '../../api/application-creation/types'

export const fetchClientApplications = createEvent<void>()
export const setCurrentClient = createEvent<ClientType>()

export const fetchClientApplicationsFx =
  createEffect<number, IApplicationFromBackend[]>()

export const $currentClient = createStore<ClientType | null>(null)
export const $currentClientApplications = createStore<
  IApplicationFromBackend[]
>([])
