import { intance } from '../request-intance'
import { applicationFields } from './types'

export const applicationsAPI = {
  createApplication: async (application: applicationFields): Promise<void> => {
    await intance.post('/applications/add', application)
  },
}
