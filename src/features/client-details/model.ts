import { combine } from 'effector'
import { $client, $clientApplications } from '../client'

export const $clientDetails = combine(
  $client,
  $clientApplications,
  (client, clientApplications) => ({
    client,
    applicationsLength: clientApplications.length,
  })
)
