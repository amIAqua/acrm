import { createEffect, createEvent } from 'effector'

export const deleteApplication = createEvent<string>()

export const deleteApplicationFx = createEffect<string, void>()
