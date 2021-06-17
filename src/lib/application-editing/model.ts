import { createStore, createEvent, createEffect } from 'effector'
import { ApplicationFromBackend } from '../../api/application-creation/types'

export const fetchApplicationToEdit = createEvent<string>()
export const saveChanges = createEvent<ApplicationFromBackend>()

export const fetchApplicationToEditFx =
  createEffect<string, ApplicationFromBackend>()

export const saveChangesFx = createEffect<ApplicationFromBackend, void>()

export const $applicationToEdit =
  createStore<ApplicationFromBackend | null>(null)
