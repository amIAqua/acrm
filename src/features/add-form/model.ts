import { createEvent, createEffect, sample } from 'effector'
import { addNewApplication } from '../../api/application-creation'
import { NewApplicationType } from '../../api/application-creation/types'
import { $client } from '../client'

// types

// events
export const addApplication = createEvent<NewApplicationType>()

// effects

export const addNewApplicationFx =
  createEffect<{ clientId: number; application: NewApplicationType }, void>()

// relationships

sample({
  clock: addApplication,
  source: $client,
  fn: (client, application) => ({ clientId: client?.id!, application }),
  target: addNewApplicationFx,
})

addNewApplicationFx.use(async ({ clientId, application }) => {
  await addNewApplication(clientId, application)
})
