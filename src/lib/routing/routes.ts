import { HomePage } from '../../pages/home'
import { Urls } from './urls'

export const routes = () => [
  {
    path: Urls.HOME,
    component: HomePage,
    exact: true,
  },
]
