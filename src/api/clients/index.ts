import {
  IApplicationFromBackend,
  ClientType,
} from '../application-creation/types'
import { instance } from '../request-intance'

export const clientsAPI = {
  getClientById: async (id: number) => {
    const client = await instance.get(`/clients/get/${id}`)
    return client.data
  },
  getClientsBySearchQuery: async (
    searchQuery: string
  ): Promise<ClientType[]> => {
    const clients = await instance.get(`/clients/${searchQuery}`)
    return clients.data
  },

  fetchClientApplications: async (
    clientId: number
  ): Promise<IApplicationFromBackend[]> => {
    const clientApplications = await instance.get(
      `clients/${clientId}/applications`
    )
    return clientApplications.data
  },
}
