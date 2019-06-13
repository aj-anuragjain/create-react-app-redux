import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'

import { HOME_PAGE_URL, ABOUT_PAGE_URL } from './constants/url'

const App = () => (
  <Switch>
    <Route exact path={HOME_PAGE_URL} component={Home} />
    <Route exact path={ABOUT_PAGE_URL} component={About} />
  </Switch>
)

export default App
