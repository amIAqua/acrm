import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './lib/routing'
import { GlobalStyles } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
