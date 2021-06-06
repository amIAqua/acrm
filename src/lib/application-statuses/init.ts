import { guard } from 'effector'
import { changeStatus, changeStatusFx } from './model'
import { StatusesAPI } from '../../api/statuses'

changeStatusFx.use(async ({ applicationId, newStatus }) => {
  await StatusesAPI.changeStatus(applicationId, newStatus)
})

guard({
  clock: changeStatus,
  filter: (args) => args.applicationStatus !== args.newStatus,
  target: changeStatusFx,
})
