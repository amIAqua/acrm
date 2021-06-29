import {
  IApplicationFromBackend,
  ClientType,
} from '../application-creation/types'
import { request, ResponseType } from '../request'

export const getClientById = async (id: number): Promise<ClientType> => {
  const client = await request.get(`/clients/get/${id}`)

  return client.data
}

export const getClientsBySearchQuery = async (
  searchQuery: string
): Promise<ClientType[]> => {
  const clients = await request.get<ResponseType<ClientType[]>>(
    `/clients/${searchQuery}`
  )
  return clients.data.data
}

export const fetchClientApplications = async (
  clientId: number
): Promise<IApplicationFromBackend[]> => {
  const clientApplications = await request.get<
    ResponseType<IApplicationFromBackend[]>
  >(`clients/${clientId}/applications`)

  return clientApplications.data.data
}
