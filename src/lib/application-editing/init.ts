import { forward } from 'effector'
import { ApplicationFromBackend } from '../../api/application-creation/types'
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
  return {} as ApplicationFromBackend
})

$applicationToEdit.on(
  fetchApplicationToEditFx.doneData,
  (_prev, application) => application
)

fetchApplicationToEditFx.done.watch(({ params }) => {
  historyPush(`${params}/edit`)
})
