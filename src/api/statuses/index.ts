import { Status } from '../application-creation/types'
import { request } from '../request'

export const StatusesAPI = {
  changeStatus: async (
    applicationId: string,
    status: Status
  ): Promise<void> => {
    await request.put(`/applications/${applicationId}/status/${status}`)
  },
}
