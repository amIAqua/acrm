import { createEvent, createEffect, guard, createStore } from 'effector'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { getApplicationForPrepare } from '../../api/orders'
import { historyPush } from '../../lib/routing/history'

export const prepareOrder = createEvent<number>()
export const resetPreparedOrder = createEvent()
export const createOrder = createEvent<any>()

// effects

export const prepareOrderFx = createEffect<number, IApplicationFromBackend>()

// stores
export const $preparedOrder = createStore<IApplicationFromBackend | null>(null)
  .on(prepareOrderFx.doneData, (_, application) => application)
  .reset(resetPreparedOrder)

const $isOrder = $preparedOrder.map((order) => order === null)

// relations

guard({
  clock: prepareOrder,
  filter: $isOrder,
  target: prepareOrderFx,
})

prepareOrderFx.use(async (id) => {
  return getApplicationForPrepare(id)
})

prepareOrderFx.done.watch(({ params }) => {
  historyPush(`/orders/prepare/${params}`)
})
