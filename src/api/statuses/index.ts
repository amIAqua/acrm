import { Status } from '../application-creation/types'
import { request } from '../request'

export const changeApplicationStatus = async (
  applicationId: string,
  status: Status
): Promise<void> => {
  await request.put(`/applications/${applicationId}/status/${status}`)
}
