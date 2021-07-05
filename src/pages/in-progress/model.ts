import { createEffect, createEvent, createStore, forward } from 'effector'
import { pending } from 'patronum'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { fetchAllInProgress } from '../../api/in-progress'

export const fetchApplicationsInProgress = createEvent<void>()
export const resetApplicationsInProgress = createEvent<void>()

export const fetchApplicationsInProgressFx = createEffect<
  void,
  IApplicationFromBackend[]
>()

export const $applicationsInProgress = createStore<IApplicationFromBackend[]>(
  []
)

$applicationsInProgress
  .on(
    fetchApplicationsInProgressFx.doneData,
    (_prev, applications) => applications
  )
  .reset(resetApplicationsInProgress)

export const $loading = pending({ effects: [fetchApplicationsInProgressFx] })

forward({
  from: fetchApplicationsInProgress,
  to: fetchApplicationsInProgressFx,
})

fetchApplicationsInProgressFx.use(async () => {
  return fetchAllInProgress()
})
