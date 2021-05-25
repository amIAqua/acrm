import { createEvent, createEffect } from 'effector'
import { applicationFields } from '../../api/applications/types'

// events
export const createApplication = createEvent<applicationFields>()

// effects
export const createApplicationFx = createEffect<applicationFields, void>()
