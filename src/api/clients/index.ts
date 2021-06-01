import {
  ApplicationFromBackend,
  ClientType,
} from '../application-creation/types'
import { instance } from '../request-intance'

export const clientsAPI = {
  getClientsBySearchQuery: async (
    searchQuery: string
  ): Promise<ClientType[]> => {
    const clients = await instance.get(`/clients/${searchQuery}`)
    return clients.data
  },
  fetchClientApplications: async (
    clientId: number
  ): Promise<ApplicationFromBackend[]> => {
    const clientApplications = await instance.get(
      `clients/${clientId}/applications`
    )
    return clientApplications.data
  },
}
