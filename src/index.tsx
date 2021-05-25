import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Routes } from './lib/routing'
import { history } from './lib/routing/history'
import { GlobalStyles } from './styles/global'

// effector units
import './lib/create-application/init'
import './lib/clients-search/init'
import './lib/loading/init'
import './lib/client/init'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
