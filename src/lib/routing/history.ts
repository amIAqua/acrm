import { createBrowserHistory } from 'history'
import { createEvent } from 'effector'

export const history = createBrowserHistory()
export const currentLocation = history.location.pathname

export const locationCheck = (url: string) => currentLocation.startsWith(url)

export const historyPush = createEvent<string>()

historyPush.watch((url) => history.push(url))
