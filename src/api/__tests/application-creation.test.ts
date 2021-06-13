import axios from 'axios'
import { applicationCreationAPI } from '../application-creation'
import { instance } from '../request-intance'
import { application } from './mockData'

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

const mockedInstance = instance as jest.Mocked<typeof axios>

describe('application-creation API', () => {
  describe('createNewApplication', () => {
    it('called successfully', async () => {
      mockedInstance.post.mockImplementationOnce(() => Promise.resolve(null))

      applicationCreationAPI.createNewApplication(application)

      expect(mockedInstance.post).toHaveBeenCalledTimes(1)
    })
  })

  describe('addNewApplication', () => {
    it('called successfully', async () => {
      mockedInstance.post.mockImplementationOnce(() => Promise.resolve(null))

      applicationCreationAPI.addApplication(1, application)

      expect(mockedInstance.post).toHaveBeenCalledTimes(1)
    })
  })
})
