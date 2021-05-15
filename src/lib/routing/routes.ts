import { CreateApplicationPage } from '../../pages/create-application'
import { HomePage } from '../../pages/home'
import { Urls } from './urls'

export const routes = () => [
  {
    path: Urls.HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: Urls.CREATE,
    component: CreateApplicationPage,
    exact: true,
  },
]
