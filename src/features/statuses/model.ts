import { createEvent, createEffect, guard, sample } from 'effector'
import { Status } from '../../api/application-creation/types'
import { changeApplicationStatus } from '../../api/statuses'
import { $clientId, refetchApplications } from '../client'

type ChangeStatusType = {
  applicationId: string
  applicationStatus: Status
  newStatus: Status
}

export const changeStatus = createEvent<ChangeStatusType>()

export const changeStatusFx = createEffect<
  Omit<ChangeStatusType, 'applicationStatus'>,
  void
>()

changeStatusFx.use(async ({ applicationId, newStatus }) => {
  await changeApplicationStatus(applicationId, newStatus)
})

guard({
  clock: changeStatus,
  filter: (args) => args.applicationStatus !== args.newStatus,
  target: changeStatusFx,
})

sample({
  clock: changeStatusFx.done,
  source: $clientId,
  target: refetchApplications,
})
