import { createStore, createEvent, createEffect, forward } from 'effector'
import { pending } from 'patronum'

// types

// events
export const getOrders = createEvent<void>()

// effects
const getOrdersFx = createEffect<void, any>()

// stores

export const $orders = createStore<any>([]).on(
  getOrdersFx.doneData,
  (_, orders) => orders
)

export const $loading = pending({ effects: [getOrdersFx] })

// relationships

forward({ from: getOrders, to: getOrdersFx })

getOrdersFx.use(async () => {
  // api request
})
