import { createEvent, createEffect, forward, sample } from 'effector'
import { deleteOne } from '../../api/application-deleting'
import { $clientId, refetchApplications } from '../client'

export const deleteApplication = createEvent<string>()

export const deleteApplicationFx = createEffect<string, void>()

forward({ from: deleteApplication, to: deleteApplicationFx })

deleteApplicationFx.use(async (id) => {
  deleteOne(id)
})

// refetch application after deleting one
sample({
  clock: deleteApplicationFx.done,
  source: $clientId,
  target: refetchApplications,
})
