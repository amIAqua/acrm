import { createEvent, createEffect } from 'effector'
import { applicationFields, NewApplication } from '../../api/applications/types'

// events
export const createApplication = createEvent<applicationFields>()

export const newApplication = createEvent<NewApplication>()

// effects
export const createApplicationFx = createEffect<applicationFields, void>()

export const addNewApplicationFx = createEffect<NewApplication, void>()

newApplication.watch((data) => {
  console.log(data)
})
