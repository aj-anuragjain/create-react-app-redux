import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Antd from './containers/Antd'

import 'antd/dist/antd.css'

import {
  HOME_PAGE_URL,
  ABOUT_PAGE_URL,
  ANTD_DEMO_PAGE_URL
} from './constants/url'

const App = () => (
  <Switch>
    <Route exact path={HOME_PAGE_URL} component={Home} />
    <Route exact path={ABOUT_PAGE_URL} component={About} />
    <Route exact path={ANTD_DEMO_PAGE_URL} component={Antd} />
  </Switch>
)

export default App
