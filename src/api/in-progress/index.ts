import { IApplicationFromBackend } from '../application-creation/types'
import { request, ResponseType } from '../request'

export const fetchAllInProgress = async (): Promise<
  IApplicationFromBackend[]
> => {
  const applications = await request.get<
    ResponseType<IApplicationFromBackend[]>
  >('/in_progress/all')

  console.log(applications.data.data[0].startedAt)

  return applications.data.data
}
