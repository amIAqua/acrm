import { request, ResponseType } from '../request'

export const setApplicationToProgress = async (
  applicationId: number
): Promise<void> => {
  await request.put<ResponseType<void>>(
    `/applications/${applicationId}/status/IN_PROGRESS`
  )
}

export const setApplicationToClosed = async (
  applicationId: number
): Promise<void> => {
  await request.put<ResponseType<void>>(
    `/applications/${applicationId}/status/CLOSED`
  )
}
