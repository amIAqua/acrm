import { createBrowserHistory } from 'history'
import { createEvent } from 'effector'

export const history = createBrowserHistory()

export const historyPush = createEvent<string>()

historyPush.watch((url) => history.push(url))
