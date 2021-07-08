import { createEvent, createEffect, forward } from 'effector'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { getApplicationForPrepare } from '../../api/orders'
import { historyPush } from '../../lib/routing/history'

export const prepareOrder = createEvent<number>()
export const createOrder = createEvent<any>()

// effects

export const prepareOrderFx = createEffect<number, IApplicationFromBackend>()
const createOrderFx = createEffect<any, any>()

forward({ from: prepareOrder, to: prepareOrderFx })

prepareOrderFx.use(async (id) => {
  return getApplicationForPrepare(id)
})

prepareOrderFx.done.watch(({ params }) => {
  historyPush(`/orders/prepare/${params}`)
})
