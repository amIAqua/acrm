import { IApplicationFromBackend } from '../application-creation/types'
import { instance } from '../request-intance'

export const InProgressAPI = {
  fetchAllInProgress: async (): Promise<IApplicationFromBackend[]> => {
    const applications = await instance.get('/in_progress/all')
    return applications.data
  },
}
