import { ClientApplicationsPage } from '../../pages/client-applications'
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
    path: Urls.SEARCH,
    component: SearchPage,
    exact: true,
  },
  {
    path: Urls.CLIENT_APPLICATIONS,
    component: ClientApplicationsPage,
    exact: true,
  },
]
