import { createStore, createEvent, createEffect, forward } from 'effector'
import { getApplicationForPrepare } from '../../api/orders'
import { historyPush } from '../../lib/routing/history'

export const prepareOrder = createEvent<number>()
export const createOrder = createEvent<any>()

// effects

const prepareOrderFx = createEffect<number, any>()
const createOrderFx = createEffect<any, any>()

export const $preparedOrder = createStore(null).on(
  prepareOrderFx.doneData,
  (_, application) => application
)

forward({ from: prepareOrder, to: prepareOrderFx })

prepareOrderFx.use(async (id) => {
  return getApplicationForPrepare(id)
})

prepareOrderFx.done.watch(({ params }) => {
  historyPush(`/orders/prepare/${params}`)
})
