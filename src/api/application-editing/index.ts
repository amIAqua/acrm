import { ApplicationFromBackend } from '../application-creation/types'
import { instance } from '../request-intance'

export const applicationEditingAPI = {
  getApplicationForEditing: async (
    id: string
  ): Promise<ApplicationFromBackend> => {
    console.log(id)

    // const application = await instance.get('/')
    return {} as ApplicationFromBackend // application.data
  },
}
