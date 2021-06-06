import { createEvent, createEffect } from 'effector'
import { Status } from '../../api/application-creation/types'

type ChangeStatusType = {
  applicationId: string
  applicationStatus: Status
  newStatus: Status
}

export const changeStatus = createEvent<ChangeStatusType>()

export const changeStatusFx =
  createEffect<Omit<ChangeStatusType, 'applicationStatus'>, void>()
