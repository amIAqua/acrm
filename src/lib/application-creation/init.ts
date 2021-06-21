import { forward, sample } from 'effector'
import {
  createApplication,
  createApplicationFx,
  addNewApplicationFx,
  addApplication,
} from './model'
import { applicationCreationAPI } from '../../api/application-creation'
import { IApplication } from '../../api/application-creation/types'
import { $client } from '../client'

forward({
  from: createApplication,
  to: createApplicationFx,
})

createApplicationFx.use(async (application: IApplication) => {
  await applicationCreationAPI.createNewApplication(application)
})

sample({
  clock: addApplication,
  source: $client,
  fn: (client, application) => ({ clientId: client?.id!, application }),
  target: addNewApplicationFx,
})

addNewApplicationFx.use(async ({ clientId, application }) => {
  await applicationCreationAPI.addApplication(clientId, application)
})
