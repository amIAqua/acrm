import { instance } from '../request-intance'

export const applicationDeletingAPI = {
  deleteOne: async (id: string): Promise<void> => {
    await instance.delete(`/applications/${id}/delete`)
  },
}
