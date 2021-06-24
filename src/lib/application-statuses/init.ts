import { guard } from 'effector'
import { changeStatus, changeStatusFx } from './model'
import { changeApplicationStatus } from '../../api/statuses'

changeStatusFx.use(async ({ applicationId, newStatus }) => {
  await changeApplicationStatus(applicationId, newStatus)
})

guard({
  clock: changeStatus,
  filter: (args) => args.applicationStatus !== args.newStatus,
  target: changeStatusFx,
})
