import React from 'react'
import { Link } from 'react-router-dom'

import { HOME_PAGE_URL, ABOUT_PAGE_URL } from '../../helpers/constants'

const Header = () => (
  <header>
    <Link to={HOME_PAGE_URL}>Home</Link>
    <Link to={ABOUT_PAGE_URL}>About</Link>
  </header>
)

export default Header
