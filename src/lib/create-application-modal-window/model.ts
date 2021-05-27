import { createStore, createEvent } from 'effector'
import { MouseEvent } from 'react'

export const onOpen = createEvent<void>()
export const onClose = createEvent<MouseEvent<HTMLElement> | void>()

export const $isVisible = createStore<boolean>(false)
  .on(onOpen, (_) => true)
  .on(onClose, (_) => false)
