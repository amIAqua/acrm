import { forward } from 'effector'
import { applicationEditingAPI } from '../../api/application-editing'
import { historyPush } from '../routing/history'
import {
  $applicationToEdit,
  fetchApplicationToEdit,
  fetchApplicationToEditFx,
} from './model'

forward({
  from: fetchApplicationToEdit,
  to: fetchApplicationToEditFx,
})

fetchApplicationToEditFx.use(async (id) => {
  return applicationEditingAPI.getApplicationForEditing(id)
})

$applicationToEdit.on(
  fetchApplicationToEditFx.doneData,
  (_prev, application) => application
)

fetchApplicationToEditFx.done.watch(({ params }) => {
  historyPush(`${params}/edit`)
})

$applicationToEdit.watch((data) => {
  console.log(data)
})
