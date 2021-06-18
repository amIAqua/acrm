import { createStore, createEvent, createEffect } from 'effector'
import { IApplicationFromBackend } from '../../api/application-creation/types'

export const fetchApplicationToEdit = createEvent<string>()
export const saveChanges = createEvent<IApplicationFromBackend>()

export const fetchApplicationToEditFx =
  createEffect<string, IApplicationFromBackend>()

export const saveChangesFx = createEffect<IApplicationFromBackend, void>()

export const $applicationToEdit =
  createStore<IApplicationFromBackend | null>(null)
