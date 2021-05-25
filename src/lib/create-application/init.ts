import { forward } from 'effector'
import { createApplication, createApplicationFx } from './model'
import { applicationsAPI } from '../../api/applications'
import { applicationFields } from '../../api/applications/types'
import { historyPush } from '../routing/history'

forward({
  from: createApplication,
  to: createApplicationFx,
})

createApplicationFx.use(async (application: applicationFields) => {
  await applicationsAPI.createApplication(application)
})

createApplicationFx.done.watch(() => {
  historyPush('/')
})
