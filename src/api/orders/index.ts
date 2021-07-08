import { IApplicationFromBackend } from '../application-creation/types'
import { request } from '../request'

export const getApplicationForPrepare = async (
  id: number
): Promise<IApplicationFromBackend> => {
  const application = await request.get<IApplicationFromBackend>(
    `/applications/${id}`
  )

  return application.data
}
