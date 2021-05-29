import { createStore, createEvent } from 'effector'

export const onOpen = createEvent<void>()
export const onClose = createEvent<void>()

export const $isVisible = createStore<boolean>(false)
  .on(onOpen, (_) => true)
  .on(onClose, (_) => false)
