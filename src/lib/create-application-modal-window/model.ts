import { createStore, createEvent, forward } from 'effector'
import { MouseEvent } from 'react'

export const onOpen = createEvent<void>()
export const onClose = createEvent<MouseEvent<HTMLElement>>()

export const $isVisible = createStore<boolean>(false)
  .on(onOpen, (_) => true)
  .on(onClose, (_) => false)
