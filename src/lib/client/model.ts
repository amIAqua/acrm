import { createStore, createEvent, createEffect } from 'effector'
import { Client } from '../../api/clients/types'

export const fetchClientApplications = createEvent<void>()
export const setCurrentClient = createEvent<Client>()

export const fetchClientApplicationsFx = createEffect()

export const $currentClient = createStore<Client | null>(null)
export const $currentClientApplications = createStore<any>(null)
