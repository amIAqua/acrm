import { createEvent, createEffect, guard, createStore } from 'effector'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { getApplicationForPrepare } from '../../api/orders'
import { historyPush } from '../../lib/routing/history'

export const prepareApplicationForOrder = createEvent<number>()
export const resetPreparedOrder = createEvent()
export const createOrder = createEvent<any>()

// effects

export const prepareApplicationForOrderFx = createEffect<
  number,
  IApplicationFromBackend
>()

// stores
export const $preparedApplication = createStore<IApplicationFromBackend | null>(
  null
)
  .on(prepareApplicationForOrderFx.doneData, (_, application) => application)
  .reset(resetPreparedOrder)

const $isOrder = $preparedApplication.map((application) => application === null)

// relations

guard({
  clock: prepareApplicationForOrder,
  filter: $isOrder,
  target: prepareApplicationForOrderFx,
})

prepareApplicationForOrderFx.use(async (id) => {
  return getApplicationForPrepare(id)
})

prepareApplicationForOrderFx.done.watch(({ params }) => {
  historyPush(`/orders/prepare/${params}`)
})
