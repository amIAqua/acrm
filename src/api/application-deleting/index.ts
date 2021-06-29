import { request, ResponseType } from '../request'

export const deleteOne = async (id: string): Promise<void> => {
  await request.delete<ResponseType<void>>(`/applications/${id}/delete`)
}
