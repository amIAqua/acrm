import {
  createStore,
  createEvent,
  createEffect,
  forward,
  split,
  sample,
} from 'effector'
import { pending } from 'patronum'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import {
  saveChangedApplication,
  getApplicationForEditing,
} from '../../api/application-editing'
import { historyPush } from '../../lib/routing/history'
import { $clientId } from '../client'

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

// redirect after changes saved
split({
  source: saveChangesFx.done.map((data) => ({
    status: data.params.status,
    clientId: data.params.clientId,
  })),
  match: {
    to_progress: (params) => params.status === 'IN_PROGRESS',
    to_rest: (params) =>
      params.status === 'CLOSED' || params.status === 'CREATED',
  },
  cases: {
    to_progress: historyPush.prepend(() => '/in_progress'),
    to_rest: historyPush.prepend(
      (params: { status: string; clientId: number }) =>
        `/clients/${params.clientId}/applications`
    ),
  },
})

fetchApplicationToEditFx.done.watch(({ params }) => {
  historyPush(`/${params}/edit`)
})
