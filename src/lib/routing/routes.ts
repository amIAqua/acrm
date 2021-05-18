import { CreateApplicationPage } from '../../pages/create-application'
import { HomePage } from '../../pages/home'
import { SearchPage } from '../../pages/search'
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
  {
    path: Urls.SEARCH,
    component: SearchPage,
    exact: true,
  },
]
