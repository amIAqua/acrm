import { IApplicationFromBackend } from '../application-creation/types'
import { request, ResponseType } from '../request'

export const getApplicationForPrepare = async (
  id: number
): Promise<IApplicationFromBackend> => {
  const application = await request.get<ResponseType<IApplicationFromBackend>>(
    `/applications/${id}`
  )
  return application.data.data
}
