import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export function historyPush(url: string) {
  history.push(url)
}
