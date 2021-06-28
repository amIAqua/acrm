import { createEvent, createEffect, forward } from 'effector'
import { createApplicationFromScratch } from '../../api/application-creation'
import { IApplicationFromScratch } from '../../api/application-creation/types'

// types

// events
export const createApplication = createEvent<IApplicationFromScratch>()

// effects
export const createApplicationFx = createEffect<IApplicationFromScratch, void>()

// stores

// relationships

forward({ from: createApplication, to: createApplicationFx })

createApplicationFx.use(async (application) => {
  await createApplicationFromScratch(application)
})
