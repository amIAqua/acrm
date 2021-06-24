import { forward } from 'effector'
import { deleteOne } from '../../api/application-deleting'
import { deleteApplication, deleteApplicationFx } from './model'

forward({
  from: deleteApplication,
  to: deleteApplicationFx,
})

deleteApplicationFx.use(async (id) => {
  deleteOne(id)
})
