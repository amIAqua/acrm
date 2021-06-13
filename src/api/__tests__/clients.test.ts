import axios from 'axios'
import { instance } from '../request-intance'
import { clientsAPI } from '../clients'

jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: jest.fn(),
      }
    },
  }
})

const mockedInstance = instance as jest.Mocked<typeof axios>

const clients = [
  {
    name: 'Alexandr',
    surname: 'Vasilev',
    phoneNumber: '+123123',
    email: '',
  },
]

describe('clients API', () => {
  describe('getClientsBySearchQuery', () => {
    it('returns successful result', async () => {
      mockedInstance.get.mockResolvedValue({ data: clients })

      const response = await clientsAPI.getClientsBySearchQuery('Vasilev')

      expect(response).toEqual(clients)
    })

    // it('returns error', async () => {
    //   mockedInstance.get.mockRejectedValueOnce('cannot find clients')

    //   const response = await clientsAPI.getClientsBySearchQuery('Petrov')

    //   expect(response).not.toEqual(clients)
    // })
  })
})
