import { createStore, createEvent, createEffect } from 'effector'
import { Client } from '../../api/clients/types'

export const changeSearchQuery = createEvent<string>()
export const resetSearchQuery = createEvent<void>()
export const resetFetchedClients = createEvent<void>()

export const searchRequest = createEvent<void>()

export const searchRequestFx = createEffect<void, Client[]>()

export const $searchQuery = createStore<string>('')
export const $fetchedClients = createStore<Client[]>([])
