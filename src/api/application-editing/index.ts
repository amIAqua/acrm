import { IApplicationFromBackend } from '../application-creation/types'
import { request } from '../request'

export const getApplicationForEditing = async (
  id: string
): Promise<IApplicationFromBackend> => {
  const application = await request.get(`/${id}/edit`)
  return application.data
}

export const saveChangedApplication = async (
  application: IApplicationFromBackend
): Promise<void> => {
  await request.put(`/${application.id}/save`, application)
}
