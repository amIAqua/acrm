import { request } from '../request'

export const deleteOne = async (id: string): Promise<void> => {
  await request.delete(`/applications/${id}/delete`)
}
