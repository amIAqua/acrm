import { createStore, createEvent, createEffect } from 'effector'
import { ApplicationFromBackend } from '../../api/application-creation/types'

export const fetchApplicationToEdit = createEvent<string>()

export const fetchApplicationToEditFx =
  createEffect<string, ApplicationFromBackend>()

export const $applicationToEdit =
  createStore<ApplicationFromBackend | null>(null)
