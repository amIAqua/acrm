import { forward } from 'effector'
import {
  createApplication,
  createApplicationFx,
  addNewApplicationFx,
  newApplication,
} from './model'
import { applicationCreationAPI } from '../../api/application-creation'
import { ApplicationType } from '../../api/application-creation/types'

forward({
  from: createApplication,
  to: createApplicationFx,
})

createApplicationFx.use(async (application: ApplicationType) => {
  await applicationCreationAPI.createNewApplication(application)
})

forward({
  from: newApplication,
  to: addNewApplicationFx,
})

addNewApplicationFx.use(async ({ clientId, application }) => {
  await applicationCreationAPI.addApplication(clientId, application)
})
