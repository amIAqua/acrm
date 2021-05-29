import { ClientApplication, NewApplication } from '../applications/types'
import { instance } from '../request-intance'
import { Client } from './types'

export const clientsAPI = {
  getClientsBySearchQuery: async (searchQuery: string): Promise<Client[]> => {
    const clients = await instance.get(`/clients/${searchQuery}`)
    return clients.data
  },
  fetchClientApplications: async (
    clientId: number
  ): Promise<ClientApplication[]> => {
    const clientApplications = await instance.get(
      `clients/${clientId}/applications`
    )
    return clientApplications.data
  },
  addApplication: async (
    clientId: number,
    application: NewApplication
  ): Promise<void> => {
    await instance.post(`clients/${clientId}/applications/new`, application)
  },
}
