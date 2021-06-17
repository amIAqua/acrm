import { forward, guard } from 'effector'
import { applicationEditingAPI } from '../../api/application-editing'
import { historyPush } from '../routing/history'
import {
  $applicationToEdit,
  fetchApplicationToEdit,
  fetchApplicationToEditFx,
  saveChanges,
  saveChangesFx,
} from './model'

forward({
  from: fetchApplicationToEdit,
  to: fetchApplicationToEditFx,
})

// TODO: Guard to manage request

// guard({
//  // clock: fetchApplicationToEdit,
//   source: $applicationToEdit,
//   filter: (application) => !application,
//   target: fetchApplicationToEditFx,
// })

fetchApplicationToEditFx.use(async (id) => {
  return applicationEditingAPI.getApplicationForEditing(id)
})

forward({
  from: saveChanges,
  to: saveChangesFx,
})

saveChangesFx.use(async (editedApplication) => {
  return applicationEditingAPI.saveChangedApplication(editedApplication)
})

$applicationToEdit.on(
  fetchApplicationToEditFx.doneData,
  (_prev, application) => application
)

fetchApplicationToEditFx.done.watch(({ params }) => {
  historyPush(`/${params}/edit`)
})

// redirect after changed saved
saveChangesFx.done.watch(() => {
  historyPush('/in_progress')
})
