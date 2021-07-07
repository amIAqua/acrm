import { createBrowserHistory } from 'history'
import { createEvent, createStore } from 'effector'

export const history = createBrowserHistory()

export const historyPush = createEvent<string>()

historyPush.watch((url) => history.push(url))

export const $location = createStore(history.location.pathname).on(
  historyPush,
  (_, url) => url
)
