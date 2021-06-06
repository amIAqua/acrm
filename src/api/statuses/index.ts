import { Status } from '../application-creation/types'
import { instance } from '../request-intance'

export const StatusesAPI = {
  changeStatus: async (
    applicationId: string,
    status: Status
  ): Promise<void> => {
    await instance.put(`/applications/${applicationId}/status/${status}`)
  },
}
