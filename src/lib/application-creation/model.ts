import { createEvent, createEffect } from 'effector'
import { IApplication } from '../../api/application-creation/types'

type NewApplicationType = {
  clientId: number
  application: IApplication
}

// events
export const createApplication = createEvent<IApplication>()

export const newApplication =
  createEvent<{
    clientId: number
    application: IApplication
  }>()

// effects
export const createApplicationFx = createEffect<IApplication, void>()

export const addNewApplicationFx = createEffect<NewApplicationType, void>()
