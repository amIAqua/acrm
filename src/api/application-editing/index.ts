import { ApplicationFromBackend } from '../application-creation/types'
import { instance } from '../request-intance'

export const applicationEditingAPI = {
  getApplicationForEditing: async (
    id: string
  ): Promise<ApplicationFromBackend> => {
    const application = await instance.get(`/${id}/edit`)
    return application.data
  },
  saveChangedApplication: async (
    application: ApplicationFromBackend
  ): Promise<void> => {
    await instance.put(`/${application.id}/save`)
  },
}
