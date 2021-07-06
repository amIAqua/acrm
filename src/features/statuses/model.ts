import { createEvent, createEffect, sample, forward, split } from 'effector'
import {
  setApplicationToProgress,
  setApplicationToClosed,
} from '../../api/statuses'
import { $clientId, getClientApplications } from '../client'
import { fetchApplicationsInProgress } from '../../pages/in-progress/model'

export const toProgress = createEvent<number>()
export const toClosed = createEvent<number>()

export const toProgressFx = createEffect<number, void>()
export const toClosedFx = createEffect<number, void>()

forward({ from: toProgress, to: toProgressFx })

toProgressFx.use(async (applicationId) => {
  await setApplicationToProgress(applicationId)
})

forward({ from: toClosed, to: toClosedFx })

toClosedFx.use(async (applicationId) => {
  await setApplicationToClosed(applicationId)
})

// refetch applications after effects are done
sample({
  clock: toProgressFx.done,
  source: $clientId,
  target: getClientApplications,
})

forward({ from: toClosedFx.done, to: fetchApplicationsInProgress })
