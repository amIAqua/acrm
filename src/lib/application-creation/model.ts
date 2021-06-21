import { createEvent, createEffect } from 'effector'
import {
  IApplication,
  NewApplicationType,
} from '../../api/application-creation/types'

type EffectApplicationType = { clientId: number } & NewApplicationType

// events
export const createApplication = createEvent<IApplication>()

export const addApplication = createEvent<NewApplicationType>()

// effects
export const createApplicationFx = createEffect<IApplication, void>()

export const addNewApplicationFx =
  createEffect<{ clientId: number; application: NewApplicationType }, void>()
