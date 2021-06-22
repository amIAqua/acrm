import { request } from '../request'
import { IApplicationFromScratch, NewApplicationType } from './types'

export const createApplicationFromScratch = (
  application: IApplicationFromScratch
): Promise<void> =>
  request.post('/application-creation/create-new', application)

export const addNewApplication = (
  clientId: number,
  application: NewApplicationType
): Promise<void> =>
  request.post(`application-creation/${clientId}/add-new`, application)
