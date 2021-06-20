import { sample } from 'effector'
import { clientsAPI } from '../../api/clients'
import {
  $searchQuery,
  changeSearchQuery,
  searchRequestFx,
  searchRequest,
  $fetchedClients,
  resetSearchQuery,
  resetFetchedClients,
} from './model'

$searchQuery
  .on(changeSearchQuery, (_prev, searchQuery) => searchQuery)
  .reset(resetSearchQuery)

$fetchedClients
  .on(searchRequestFx.doneData, (_prev, results) => results)
  .reset(resetFetchedClients)

searchRequestFx.use(async (query: string) => {
  return clientsAPI.getClientsBySearchQuery(query)
})

sample({
  clock: searchRequest,
  source: $searchQuery,
  target: searchRequestFx,
})
