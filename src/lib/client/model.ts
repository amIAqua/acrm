import { createStore, createEvent, createEffect } from 'effector'
import { ClientApplication } from '../../api/applications/types'
import { Client } from '../../api/clients/types'

export const fetchClientApplications = createEvent<void>()
export const setCurrentClient = createEvent<Client>()

export const fetchClientApplicationsFx =
  createEffect<Client, ClientApplication[]>()

export const $currentClient = createStore<Client | null>(null)
export const $currentClientApplications =
  createStore<ClientApplication[] | null>(null)
