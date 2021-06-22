import axios from 'axios'
import { Status } from '../application-creation/types'
import { InProgressAPI } from '../in-progress'
import { request } from '../request'
import { applicationsInProgress } from './mockData'

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

describe('in-progress API', () => {
  describe('fetchAllInProgress', () => {
    beforeEach(() => {
      mockedInstance.get.mockResolvedValue({ data: applicationsInProgress })
    })
    it('returns successful result', async () => {
      const response = await InProgressAPI.fetchAllInProgress()

      expect(response).toEqual(applicationsInProgress)
    })

    it('called times ', async () => {
      await InProgressAPI.fetchAllInProgress()

      expect(mockedInstance.get).toHaveBeenCalledTimes(1)
    })

    it('with status field "IN_PROGRESS" ', async () => {
      const response = await InProgressAPI.fetchAllInProgress()

      expect(response[0].status).toBe(Status.IN_PROGRESS)
    })
  })
})
