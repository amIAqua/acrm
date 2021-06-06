import { createStore, createEvent, createEffect } from 'effector'

type ApplicationsInProgressType = any

export const $applicationsInProgress = createStore<
  ApplicationsInProgressType[]
>([])
