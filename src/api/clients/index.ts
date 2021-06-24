import {
  IApplicationFromBackend,
  ClientType,
} from '../application-creation/types'
import { request } from '../request'

export const getClientById = async (id: number) => {
  const client = await request.get(`/clients/get/${id}`)
  return client.data
}

export const getClientsBySearchQuery = async (
  searchQuery: string
): Promise<ClientType[]> => {
  const clients = await request.get(`/clients/${searchQuery}`)
  return clients.data
}

export const fetchClientApplications = async (
  clientId: number
): Promise<IApplicationFromBackend[]> => {
  const clientApplications = await request.get(
    `clients/${clientId}/applications`
  )
  return clientApplications.data
}
