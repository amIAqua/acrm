import { createStore, createEvent, createEffect, sample } from 'effector'
import { getClientsBySearchQuery } from '../../api/clients'
import { ClientType } from '../../api/application-creation/types'
import { pending } from 'patronum'

// types

// events

export const changeSearchQuery = createEvent<string>()
export const resetSearchQuery = createEvent<void>()
export const resetFetchedClients = createEvent<void>()

export const searchRequest = createEvent<void>()

// effects
export const searchRequestFx = createEffect<string, ClientType[]>()

// stores
export const $searchQuery = createStore<string>('')
export const $fetchedClients = createStore<ClientType[]>([])

// relationships

searchRequestFx.use(async (query: string) => {
  return getClientsBySearchQuery(query)
})

$searchQuery
  .on(changeSearchQuery, (_prev, searchQuery) => searchQuery)
  .reset(resetSearchQuery)

$fetchedClients
  .on(searchRequestFx.doneData, (_prev, results) => results)
  .reset(resetFetchedClients)

sample({
  clock: searchRequest,
  source: $searchQuery,
  target: searchRequestFx,
})

export const $loading = pending({ effects: [searchRequestFx] })
