import { createEvent, createEffect } from 'effector'
import {
  IApplicationFromScratch,
  NewApplicationType,
} from '../../api/application-creation/types'

type EffectApplicationType = { clientId: number } & NewApplicationType

// events
export const createApplication = createEvent<IApplicationFromScratch>()

export const addApplication = createEvent<NewApplicationType>()

// effects
export const createApplicationFx = createEffect<IApplicationFromScratch, void>()

export const addNewApplicationFx =
  createEffect<{ clientId: number; application: NewApplicationType }, void>()
