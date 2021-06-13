import { ApplicationInProgressType } from './types'
import { instance } from '../request-intance'

export const InProgressAPI = {
  fetchAllInProgress: async (): Promise<ApplicationInProgressType[]> => {
    const applications = await instance.get('/in_progress/all')
    return applications.data
  },
}
