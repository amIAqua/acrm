import { createStore, createEvent, createEffect } from 'effector'
import { ClientType } from '../../api/application-creation/types'

export const changeSearchQuery = createEvent<string>()
export const resetSearchQuery = createEvent<void>()
export const resetFetchedClients = createEvent<void>()

export const searchRequest = createEvent<void>()

export const searchRequestFx = createEffect<void, ClientType[]>()

export const $searchQuery = createStore<string>('')
export const $fetchedClients = createStore<ClientType[]>([])
