import {
  createStore,
  createEvent,
  createEffect,
  forward,
  guard,
  split,
} from 'effector'
import { condition, pending } from 'patronum'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import {
  saveChangedApplication,
  getApplicationForEditing,
} from '../../api/application-editing'
import { history, historyBack, historyPush } from '../../lib/routing/history'

// types

// events
export const fetchApplicationToEdit = createEvent<string>()
export const saveChanges = createEvent<any>()

// effects
export const fetchApplicationToEditFx = createEffect<
  string,
  IApplicationFromBackend
>()

export const saveChangesFx = createEffect<IApplicationFromBackend, void>()

// stores
export const $applicationToEdit = createStore<IApplicationFromBackend | null>(
  null
)

export const $loading = pending({ effects: [fetchApplicationToEditFx] })

// relationships

forward({ from: fetchApplicationToEdit, to: fetchApplicationToEditFx })

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

// redirect after changes saved
split({
  source: saveChangesFx.done.map((data) => data.params.status),
  match: {
    to_progress: (status) => status === 'IN_PROGRESS',
    to_rest: (status) => status === 'CLOSED' || status === 'CREATED',
  },
  cases: {
    to_progress: historyPush.prepend(() => '/in_progress'),
    to_rest: historyPush.prepend(() => '/clients'),
  },
})

saveChangesFx.done.watch(({ params }) => {})
