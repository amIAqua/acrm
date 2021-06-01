import { createEvent, createEffect } from 'effector'
import { ApplicationType } from '../../api/application-creation/types'
import { OmittedClientApplication } from '../../api/application-creation/types'

type NewApplicationType = {
  clientId: number
  application: OmittedClientApplication
}

// events
export const createApplication = createEvent<ApplicationType>()

export const newApplication =
  createEvent<{
    clientId: number
    application: OmittedClientApplication
  }>()

// effects
export const createApplicationFx = createEffect<ApplicationType, void>()

export const addNewApplicationFx = createEffect<NewApplicationType, void>()
