import { createEvent, createEffect, forward } from 'effector'
import { deleteOne } from '../../api/application-deleting'

export const deleteApplication = createEvent<string>()

export const deleteApplicationFx = createEffect<string, void>()

forward({ from: deleteApplication, to: deleteApplicationFx })

deleteApplicationFx.use(async (id) => {
  deleteOne(id)
})
