import { intance } from '../request-intance'
import { Client } from './types'

export const clientsAPI = {
  getClientsBySearchQuery: async (searchQuery: string): Promise<Client[]> => {
    const clients = await intance.get(`/clients/${searchQuery}`)
    return clients.data
  },
}
