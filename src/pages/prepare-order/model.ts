import { createStore } from 'effector'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { prepareOrderFx } from '../../features/order-creation'

export const $preparedOrder = createStore<IApplicationFromBackend | null>(
  null
).on(prepareOrderFx.doneData, (_, application) => application)
