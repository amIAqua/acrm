import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Routes } from './lib/routing'
import { history } from './lib/routing/history'
import { GlobalStyles } from './styles/global'

import 'antd/dist/antd.css'

// effector units
import './lib/clients-search/init'
import './lib/loading/init'
import './lib/client/init'
import './lib/application-statuses/init'
import './lib/applications-in-progress/init'
import './lib/application-deleting/init'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
