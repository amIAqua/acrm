import { Status } from '../application-creation/types'
import { request, ResponseType } from '../request'

export const changeApplicationStatus = async (
  applicationId: string,
  status: Status
): Promise<void> => {
  await request.put<ResponseType<void>>(
    `/applications/${applicationId}/status/${status}`
  )
}
