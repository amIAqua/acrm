import { createStore, createEvent, createEffect } from 'effector'
import {
  ApplicationFromBackend,
  ClientType,
} from '../../api/application-creation/types'

export const fetchClientApplications = createEvent<void>()
export const setCurrentClient = createEvent<ClientType>()

export const fetchClientApplicationsFx =
  createEffect<number, ApplicationFromBackend[]>()

export const $currentClient = createStore<ClientType | null>(null)
export const $currentClientApplications = createStore<ApplicationFromBackend[]>(
  []
)
