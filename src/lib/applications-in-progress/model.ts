import { createStore, createEvent, createEffect } from 'effector'
import { IApplicationFromBackend } from '../../api/application-creation/types'

export const fetchApplicationsInProgress = createEvent<void>()
export const resetApplicationsInProgress = createEvent<void>()

export const fetchApplicationsInProgressFx =
  createEffect<void, IApplicationFromBackend[]>()

export const $applicationsInProgress = createStore<IApplicationFromBackend[]>(
  []
)
