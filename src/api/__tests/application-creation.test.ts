import axios from 'axios'
import {
  createApplicationFromScratch,
  addNewApplication,
} from '../application-creation'
import { request } from '../request'
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

const mockedInstance = request as jest.Mocked<typeof axios>

describe('application-creation API', () => {
  describe('createNewApplication', () => {
    it('called successfully', async () => {
      mockedInstance.post.mockImplementationOnce(() => Promise.resolve(null))

      createApplicationFromScratch(application)

      expect(mockedInstance.post).toHaveBeenCalledTimes(1)
    })
  })

  describe('addNewApplication', () => {
    it('called successfully', async () => {
      mockedInstance.post.mockImplementationOnce(() => Promise.resolve(null))

      addNewApplication(1, application)

      expect(mockedInstance.post).toHaveBeenCalledTimes(1)
    })
  })
})
