import { combine } from 'effector'
import { $client, $clientApplications } from '../../lib/client'

export const $clientDetails = combine(
  $client,
  $clientApplications,
  (client, clientApplications) => ({
    client,
    applicationsLength: clientApplications.length,
  })
)
