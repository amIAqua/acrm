import { forward, sample } from 'effector'
import {
  createApplication,
  createApplicationFx,
  addNewApplicationFx,
  addApplication,
} from './model'
import { applicationCreationAPI } from '../../api/application-creation'
import { IApplication } from '../../api/application-creation/types'

forward({
  from: createApplication,
  to: createApplicationFx,
})

createApplicationFx.use(async (application: IApplication) => {
  await applicationCreationAPI.createNewApplication(application)
})

forward({
  from: addApplication,
  to: addNewApplicationFx,
})

addNewApplicationFx.use(async ({ clientId, application }) => {
  await applicationCreationAPI.addApplication(clientId, application)
})
