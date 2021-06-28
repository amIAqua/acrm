import axios from 'axios'
import { getApplicationForEditing } from '../application-editing'
import { request } from '../request'
import { applicationFromBackend } from './mockData'

jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: jest.fn(),
        post: jest.fn(),
      }
    },
  }
})

const mockedInstance = request as jest.Mocked<typeof axios>

describe('application editing API', () => {
  describe('getApplicationForEditing', () => {
    beforeEach(() => {
      mockedInstance.get.mockResolvedValue({ data: applicationFromBackend })
    })

    it('is defined', () => {
      expect(getApplicationForEditing).toBeDefined()
    })

    it('returns correct value', async () => {
      const response = await getApplicationForEditing('1')

      expect(response).toEqual(applicationFromBackend)
    })

    it('called times', async () => {
      const response = await getApplicationForEditing('1')

      expect(mockedInstance.get).toBeCalledTimes(1)
    })
  })
})
