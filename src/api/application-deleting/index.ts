import { request } from '../request'

export const applicationDeletingAPI = {
  deleteOne: async (id: string): Promise<void> => {
    await request.delete(`/applications/${id}/delete`)
  },
}
