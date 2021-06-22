import { forward, sample } from 'effector'
import {
  createApplication,
  createApplicationFx,
  addNewApplicationFx,
  addApplication,
} from './model'
import {
  createApplicationFromScratch,
  addNewApplication,
} from '../../api/application-creation'
import { IApplicationFromScratch } from '../../api/application-creation/types'
import { $client } from '../client'

forward({
  from: createApplication,
  to: createApplicationFx,
})

createApplicationFx.use(async (application: IApplicationFromScratch) => {
  await createApplicationFromScratch(application)
})

sample({
  clock: addApplication,
  source: $client,
  fn: (client, application) => ({ clientId: client?.id!, application }),
  target: addNewApplicationFx,
})

addNewApplicationFx.use(async ({ clientId, application }) => {
  await addNewApplication(clientId, application)
})
