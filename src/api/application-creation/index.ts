import { instance } from '../request-intance'
import { IApplication } from './types'

export const applicationCreationAPI = {
  createNewApplication: async (application: IApplication): Promise<void> => {
    await instance.post('/application-creation/create-new', application)
  },
  addApplication: async (
    clientId: number,
    application: IApplication
  ): Promise<void> => {
    await instance.post(`application-creation/${clientId}/add-new`, application)
  },
}
