import { IApplicationFromBackend } from '../application-creation/types'
import { instance } from '../request-intance'

export const applicationEditingAPI = {
  getApplicationForEditing: async (
    id: string
  ): Promise<IApplicationFromBackend> => {
    const application = await instance.get(`/${id}/edit`)
    return application.data
  },
  saveChangedApplication: async (
    application: IApplicationFromBackend
  ): Promise<void> => {
    await instance.put(`/${application.id}/save`, application)
  },
}
