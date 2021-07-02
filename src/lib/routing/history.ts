import { createBrowserHistory } from 'history'
import { createEvent } from 'effector'

export const history = createBrowserHistory()

export const historyPush = createEvent<string>()
export const historyBack = createEvent<void>()

historyPush.watch((url) => history.push(url))
historyBack.watch(() => history.goBack())
