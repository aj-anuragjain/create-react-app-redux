import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { HOME_PAGE_URL, ABOUT_PAGE_URL } from '../helpers/constants'

import Routes from './Routes'

const App = () => (
  <Fragment>
    <header>
      <Link to={HOME_PAGE_URL}>Home</Link>
      <Link to={ABOUT_PAGE_URL}>About</Link>
    </header>

    <main>
      <Routes />
    </main>
  </Fragment>
)

export default App
