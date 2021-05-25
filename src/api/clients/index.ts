import { ClientApplication } from '../applications/types'
import { intance } from '../request-intance'
import { Client } from './types'

export const clientsAPI = {
  getClientsBySearchQuery: async (searchQuery: string): Promise<Client[]> => {
    const clients = await intance.get(`/clients/${searchQuery}`)
    return clients.data
  },
  fetchClientApplications: async (
    clientId: number
  ): Promise<ClientApplication[]> => {
    console.log(clientId)

    const clientApplications = await intance.get(
      `client/${clientId}/applications`
    )
    return clientApplications.data
  },
}
