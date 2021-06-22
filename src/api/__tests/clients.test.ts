import axios from 'axios'
import { request } from '../request'
import { clientsAPI } from '../clients'
import { clientApplications, clients } from './mockData'

jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: jest.fn(),
      }
    },
  }
})

const mockedInstance = request as jest.Mocked<typeof axios>

describe('clients API', () => {
  describe('getClientsBySearchQuery', () => {
    it('returns successful result', async () => {
      mockedInstance.get.mockResolvedValue({ data: clients })

      const response = await clientsAPI.getClientsBySearchQuery('Vasilev')

      expect(response).toEqual(clients)
    })
  })

  describe('fetchClientApplications', () => {
    it('returns successful result', async () => {
      mockedInstance.get.mockResolvedValue({ data: clientApplications })

      const response = await clientsAPI.fetchClientApplications(1)

      expect(response).toEqual(clientApplications)
      expect(response[0].id).toEqual(clientApplications[0].id)
      expect(response[0].clientId).toEqual(clientApplications[0].clientId)
    })
  })
})
