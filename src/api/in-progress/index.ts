import { IApplicationFromBackend } from '../application-creation/types'
import { request } from '../request'

export const fetchAllInProgress = async (): Promise<
  IApplicationFromBackend[]
> => {
  const applications = await request.get('/in_progress/all')
  return applications.data
}
