import { createStore, createEvent, createEffect } from 'effector'
import { ApplicationInProgressType } from '../../api/in-progress/types'

export const fetchApplicationsInProgress = createEvent<void>()
export const resetApplicationsInProgress = createEvent<void>()

export const fetchApplicationsInProgressFx =
  createEffect<void, ApplicationInProgressType[]>()

export const $applicationsInProgress = createStore<ApplicationInProgressType[]>(
  []
)
