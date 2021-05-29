import { instance } from '../request-intance'
import { applicationFields, NewApplication } from './types'

export const applicationsAPI = {
  createApplication: async (application: applicationFields): Promise<void> => {
    await instance.post('/applications/add', application)
  },
}
