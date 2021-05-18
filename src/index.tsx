import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './lib/routing'

import { GlobalStyles } from './styles/global'

// effector units
import './lib/create-application/init'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
