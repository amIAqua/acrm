import { IApplicationFromBackend } from '../application-creation/types'
import { request, ResponseType } from '../request'

export const fetchAllInProgress = async (): Promise<
  IApplicationFromBackend[]
> => {
  const applications = await request.get<
    ResponseType<IApplicationFromBackend[]>
  >('/in_progress/all')

  return applications.data.data
}
