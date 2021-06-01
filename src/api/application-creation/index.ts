import { instance } from '../request-intance'
import { ApplicationType, OmittedClientApplication } from './types'

export const applicationCreationAPI = {
  createNewApplication: async (application: ApplicationType): Promise<void> => {
    await instance.post('/application-creation/create-new', application)
  },
  addApplication: async (
    clientId: number,
    application: OmittedClientApplication
  ): Promise<void> => {
    await instance.post(`application-creation/${clientId}/add-new`, application)
  },
}
