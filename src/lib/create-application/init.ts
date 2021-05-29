import { forward } from 'effector'
import {
  createApplication,
  createApplicationFx,
  addNewApplicationFx,
  newApplication,
} from './model'
import { applicationsAPI } from '../../api/applications'
import { applicationFields, NewApplication } from '../../api/applications/types'
import { clientsAPI } from '../../api/clients'

forward({
  from: createApplication,
  to: createApplicationFx,
})

createApplicationFx.use(async (application: applicationFields) => {
  await applicationsAPI.createApplication(application)
})

forward({
  from: newApplication,
  to: addNewApplicationFx,
})

addNewApplicationFx.use(async ({ clientId, application }) => {
  await clientsAPI.addApplication(clientId, application)
})
