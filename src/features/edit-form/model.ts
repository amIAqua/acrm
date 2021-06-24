import { createStore, createEvent, createEffect, forward } from 'effector'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import {
  saveChangedApplication,
  getApplicationForEditing,
} from '../../api/application-editing'
import { historyPush } from '../../lib/routing/history'

// types

// events
export const fetchApplicationToEdit = createEvent<string>()
export const saveChanges = createEvent<any>()

// effects
export const fetchApplicationToEditFx =
  createEffect<string, IApplicationFromBackend>()

export const saveChangesFx = createEffect<IApplicationFromBackend, void>()

// stores
export const $applicationToEdit =
  createStore<IApplicationFromBackend | null>(null)

// relationships

forward({ from: fetchApplicationToEdit, to: fetchApplicationToEditFx })

// TODO: Guard to manage request

// guard({
//  // clock: fetchApplicationToEdit,
//   source: $applicationToEdit,
//   filter: (application) => !application,
//   target: fetchApplicationToEditFx,
// })

fetchApplicationToEditFx.use(async (id) => {
  return getApplicationForEditing(id)
})

forward({ from: saveChanges, to: saveChangesFx })

saveChangesFx.use(async (editedApplication) => {
  return saveChangedApplication(editedApplication)
})

$applicationToEdit.on(
  fetchApplicationToEditFx.doneData,
  (_prev, application) => application
)

// realization details

fetchApplicationToEditFx.done.watch(({ params }) => {
  historyPush(`/${params}/edit`)
})

// redirect after changed saved
saveChangesFx.done.watch(() => {
  historyPush('/in_progress')
})
