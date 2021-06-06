import { ClientApplicationsPage } from '../../pages/client-applications'
import { HomePage } from '../../pages/home'
import { ClientsPage } from '../../pages/clients'
import { Urls } from './urls'
import { ApplicationsInProgress } from '../../pages/in-progress'

export const routes = () => [
  {
    path: Urls.HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: Urls.CLIENTS,
    component: ClientsPage,
    exact: true,
  },
  {
    path: Urls.CLIENT_APPLICATIONS,
    component: ClientApplicationsPage,
    exact: true,
  },
  {
    path: Urls.IN_PROGRESS,
    component: ApplicationsInProgress,
    exact: true,
  },
]
