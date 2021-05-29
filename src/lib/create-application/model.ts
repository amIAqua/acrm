import { createEvent, createEffect } from 'effector'
import { applicationFields, NewApplication } from '../../api/applications/types'

// events
export const createApplication = createEvent<applicationFields>()

export const newApplication =
  createEvent<{ clientId: number; application: NewApplication }>()

// effects
export const createApplicationFx = createEffect<applicationFields, void>()

export const addNewApplicationFx =
  createEffect<{ clientId: number; application: NewApplication }, void>()
