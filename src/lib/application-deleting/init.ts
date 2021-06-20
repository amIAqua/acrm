import { forward } from 'effector'
import { applicationDeletingAPI } from '../../api/application-deleting'
import { deleteApplication, deleteApplicationFx } from './model'

forward({
  from: deleteApplication,
  to: deleteApplicationFx,
})

deleteApplicationFx.use(async (id) => {
  applicationDeletingAPI.deleteOne(id)
})
