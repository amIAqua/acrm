import { FC } from 'react'
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router'
import { routes } from './routes'

export const Routes: FC = () => <Switch>{renderRoutes(routes())}</Switch>
