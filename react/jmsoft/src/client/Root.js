import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../shared/App'
import './common.scss'
import './style.scss'
import './slick.scss'
import './slick-theme.scss'

const Root = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

export default Root