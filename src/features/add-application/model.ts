import { createEvent, createEffect, sample } from 'effector'
import { addNewApplication } from '../../api/application-creation'
import { NewClientApplicationType } from '../../api/application-creation/types'
import { $client } from '../../features/client'

// types

// events
export const addApplication = createEvent<NewClientApplicationType>()

// effects

export const addNewApplicationFx = createEffect<
  { clientId: number; application: NewClientApplicationType },
  any
>()

// relationships

addNewApplicationFx.use(async ({ clientId, application }) => {
  await addNewApplication(clientId, application)
})

sample({
  clock: addApplication,
  source: $client,
  fn: (client, application) => ({ clientId: client?.id!, application }),
  target: addNewApplicationFx,
})
