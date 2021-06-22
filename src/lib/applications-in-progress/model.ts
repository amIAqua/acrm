import { createStore, createEvent, createEffect } from 'effector'
import { pending } from 'patronum'
import { IApplicationFromBackend } from '../../api/application-creation/types'

export const fetchApplicationsInProgress = createEvent<void>()
export const resetApplicationsInProgress = createEvent<void>()

export const fetchApplicationsInProgressFx =
  createEffect<void, IApplicationFromBackend[]>()

export const $applicationsInProgress = createStore<IApplicationFromBackend[]>(
  []
)

export const $loading = pending({ effects: [fetchApplicationsInProgressFx] })
