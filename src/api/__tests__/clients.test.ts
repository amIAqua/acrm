import axios from 'axios'
import { instance } from '../request-intance'
import { clientsAPI } from '../clients'
import {
  ApplicationFromBackend,
  ClientType,
  Status,
} from '../application-creation/types'

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

describe('clients API', () => {
  let clients: ClientType[]
  let clientApplications: ApplicationFromBackend[]

  beforeAll(() => {
    clients = [
      {
        name: 'Alexandr',
        surname: 'Vasilev',
        phoneNumber: '+123123',
        email: '',
      },
    ]

    clientApplications = [
      {
        id: '1',
        clientId: '1',
        client: {
          name: 'Alexandr',
          surname: 'Vasilev',
          phoneNumber: '+123123',
          email: '',
        },
        vehicle: {
          model: 'Octavia',
          brand: 'Skoda',
          yearOfIssue: '2020',
          registrationNumber: '2323RN-2',
          VIN: 'VIN',
          engineSpecification: '1.4',
        },
        issues: {
          description: 'description',
        },
        status: Status.CREATED,
      },
      {
        id: '2',
        clientId: '1',
        client: {
          name: 'Alexandr',
          surname: 'Vasilev',
          phoneNumber: '+123123',
          email: '',
        },
        vehicle: {
          model: 'Octavia',
          brand: 'Fabia',
          yearOfIssue: '2019',
          registrationNumber: '2323RN-2',
          VIN: 'VIN2',
          engineSpecification: '1.5',
        },
        issues: {
          description: 'description2',
        },
        status: Status.IN_PROGRESS,
      },
    ]
  })

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
